import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';

// MoltClaw L3 Gateway: the main hub for Clawland edge orchestration.
// We're handles agent registration and routing here.

const app = new Hono();

// standard debug/cors setup
app.use('*', logger());
app.use('*', cors());

// keep it simple for k8s/monitoring probes
app.get('/healthz', (c) => c.json({
    status: 'ok',
    uptime: Math.floor(process.uptime()),
    version: '0.1.0'
}));

/**
 * Fleet Coordination Layer
 * TODO: move these into separate route files once it gets bigger
 */

// entry point for new agents to join the network
app.post('/api/v1/fleet/register', (c) => {
    // @todo: implement logic to persist agent metadata
    return c.json({
        success: true,
        message: 'registration accepted',
    }, 201);
});

// simple ping to let us know the agent is still alive
app.post('/api/v1/fleet/heartbeat', (c) => {
    // we'll eventually use this to track fleet health in real-time
    return c.json({ success: true, ack: true });
});

app.get('/', (c) => c.text('MoltClaw Gateway is active. Cloud-Edge orchestration ready.'));

const port = Number(process.env.PORT) || 3000;

console.log(`🚀 MoltClaw started on port ${port}`);

serve({
    fetch: app.fetch,
    port,
});
