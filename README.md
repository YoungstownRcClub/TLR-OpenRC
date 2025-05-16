# TLR-OpenRC

**Tinker League Racing: OpenRC Edition**  
A scalable, open-source platform for competitive RC driving, built on Raspberry Pi, powered by JSON protocols, and designed for real-time control, telemetry, and fun.

---

## 🚦 Overview

This project transforms a **Traxxas Slash** into a WiFi-controlled FPV race vehicle using:

- A **Raspberry Pi 4** as the controller interface (web UI + relay)  
- A **Raspberry Pi Zero 2 W** as the onboard car brain  
- A **modular JSON control protocol** to communicate between them  
- Optional: Head tracking, telemetry, AI copilots, and more

---

## 🎯 Mission

> Lower the barrier of entry for competitive robotics and racing with a fully open, hackable, and community-driven league standard.

---

## 🧩 System Architecture

| Component | Role | Hardware |
|-----------|------|----------|
| Pi 4 (`trx1str`) | Driver interface + UI server | Raspberry Pi 4 (or Pi 400) |
| Pi Zero 2 W (`trx1car`) | Vehicle control brain | Raspberry Pi Zero 2 W |
| RC Platform | Drive system | Traxxas Slash + XL-5 ESC |
| Controller | Input device (optional) | Racing wheel, Xbox controller, etc. |
| Head Tracker | Optional pan/tilt | Scorpio 2.4GHz FPV head tracker |

---

## 🧪 Sprint Progress

| Sprint # | Goal | Status |
|----------|------|--------|
| 1 | JSON control protocol | ✅ Complete |
| 2 | Controller UI + WebSocket | ✅ Complete |
| 3 | Vehicle control node (Pi 0) | 🔄 In progress |
| 4 | FPV + pan/tilt + telemetry | ⏳ Next up |

---

## 🧠 Protocol Example

```json
{
  "version": "1.0",
  "id": "car01",
  "timestamp": 1715895721,
  "mode": "manual",
  "control": {
    "throttle": 60,
    "steering": 50,
    "reverse": true,
    "handbrake": false
  }
}
```

Defined in `docs/protocol.md`

---

## 📁 Repo Structure

```
TLR-OpenRC/
├── docs/                    # Protocols, setup, and config docs
├── example_messages/        # Test JSON payloads
├── software/
│   ├── controller-pi4/      # Web UI + WebSocket server
│   └── car-node-pi0/        # Vehicle brain (Sprint 3 target)
├── hardware/                # Mounts, diagrams, schematics
├── LICENSE.txt
└── README.md
```

---

## 🛠️ Requirements

* Raspberry Pi OS 64-bit (Lite or Full)
* Node.js (on controller Pi)
* Python 3 (on car Pi)
* Access to GPIO (PWM for ESC + Servo)
* Networked environment (same WiFi)

---

## 📡 Accessing the System

* Controller UI: `http://<pi4-ip>:3000`
* Example: `http://192.168.1.143:3000`
* WebSocket relay runs on port 3000
* Vehicle Pi connects automatically via WebSocket as `"register": "car"`

---

## 💬 Community Goals

We're building a low-cost, highly moddable league-grade platform for:

* Schools
* STEM clubs
* Competitive FPV teams
* Open hardware fans

Your rig should be upgradeable, hackable, and raceable.

---

## ⚖️ License

MIT License – free to use, remix, race, and iterate.  
Just give credit where it's due.
http://www.youngstownrcclub.org
---

## 🚀 Join the League

This repo is just the start. Soon there'll be AI copilots, sensors, and more.
