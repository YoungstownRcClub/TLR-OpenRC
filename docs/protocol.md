# Tinker League Racing Control Protocol (v1.0)

This protocol defines a standardized JSON message used to control and monitor TLR-compatible RC vehicles.

## Base JSON Message

```json
{
  "version": "1.0",
  "id": "car01",
  "timestamp": 1715895721,
  "mode": "manual",
  "control": {
    "throttle": 58,
    "steering": 48,
    "reverse": true,
    "handbrake": false
  },
  "headTracking": {
    "enabled": true,
    "pan": 1550,
    "tilt": 1460
  },
  "sensors": {
    "distanceFront": 31,
    "imu": {
      "pitch": -1.2,
      "roll": 0.6
    }
  },
  "telemetry": {
    "batteryVoltage": 7.4,
    "temperatureESC": 36.5
  }
}
