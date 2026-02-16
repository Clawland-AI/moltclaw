# MoltClaw API Design (v1)

This is the spec for how MoltClaw talks to the world. We're keeping it REST-ish for now using Hono.

## Base URL
The default dev server runs at `http://localhost:3000`.

## Endpoints

### 1. Health Check
`GET /healthz`

Simple probe to check if the gateway is alive.
- **Response**: `200 OK`
- **Body**:
  ```json
  {
    "status": "ok",
    "uptime": 123,
    "version": "0.1.0"
  }
  ```

### 2. Fleet Registration
`POST /api/v1/fleet/register`

Used by PicoClaw agents when they first boot up.
- **Request Body**:
  ```json
  {
    "agentId": "uuid-string",
    "hardware": "esp32/pi/etc",
    "capabilities": ["sensing", "actuation"]
  }
  ```
- **Response**: `201 Created`

### 3. Fleet Heartbeat
`POST /api/v1/fleet/heartbeat`

Agents hit this every X seconds to stay "Active" in the fleet manager.
- **Request Body**:
  ```json
  {
    "agentId": "uuid-string",
    "load": 0.45,
    "status": "idle"
  }
  ```
- **Response**: `200 OK`

## Configuration (Environment Variables)

Stick these in your `.env` file (don't commit it!):

| Variable | Description | Default |
| :--- | :--- | :--- |
| `PORT` | Port the gateway binds to | `3000` |
| `LOG_LEVEL` | Verbosity of the Hono logger | `info` |

---

*TODO: Document the authentication flow (API keys or JWT?) once we implement the auth middleware.*
