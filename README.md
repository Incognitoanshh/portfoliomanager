# Investment Portfolio Manager - Kubernetes + Monitoring Stack

This project is a complete DevOps-enabled **Investment Portfolio Management System**. It uses a **React + Node.js + PostgreSQL** stack, deployed on **Kubernetes**, with full observability using **Prometheus, Grafana, Loki, and custom alerts**.

---

## 🧱 Tech Stack

- **Frontend**: React + Tailwind + Vite
- **Backend**: Node.js (Express)
- **Database**: PostgreSQL
- **DevOps**: Docker, Kubernetes, Helm
- **Monitoring**: Prometheus, Grafana, Loki (via Helm charts)
- **Logging**: Loki + Promtail
- **Alerting**: Custom Prometheus alert rules

---

## 📂 Project Structure

```
├── backend/                     # Express backend (Dockerized)
├── frontend/                    # React + Tailwind frontend (Dockerized)
├── k8s/                         # Kubernetes manifests (Ingress, Deployments, Services)
├── logging/
│   └── loki-values.yaml         # Helm values for Loki & Promtail
├── monitoring/
│   ├── prometheus-values.yaml   # Helm values for Prometheus+Grafana
│   ├── custom-alerts.yaml       # PrometheusRule for alerts
│   └── Dashboard/               # Grafana dashboards (optional)
└── docker-compose.yml           # For local logging/monitoring test
```

---

## 🚀 How to Deploy

### 1. Deploy PostgreSQL, Backend & Frontend
```bash
kubectl apply -f k8s/
```

### 2. Setup Loki
```bash
helm upgrade --install loki grafana/loki-stack -f logging/loki-values.yaml -n monitoring --create-namespace
```

### 3. Setup Prometheus + Grafana
```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm upgrade --install monitoring prometheus-community/kube-prometheus-stack -f monitoring/prometheus-values.yaml -n monitoring
```

### 4. Apply Custom Alerts
```bash
kubectl apply -f monitoring/custom-alerts.yaml -n monitoring
```

---

## 🔍 Access URLs

| Component    | URL                            |
|--------------|---------------------------------|
| Frontend     | `http://portfolio.local`        |
| Backend API  | `http://portfolio.local/api`    |
| Grafana      | `http://<NodeIP>:3000`          |
| Prometheus   | `http://<NodeIP>:9090`          |

**Grafana Credentials:**
- Username: `admin`
- Password: `admin` (or as set in `prometheus-values.yaml`)

---

## 📊 Alerts Configured

- High CPU usage (>70%)
- High Memory usage (>70%)
- Pod CrashLoopBackOff
- Pod restarts > 3

---

## 📅 Last Updated
2025-06-06 12:10:11

---

## 🧑‍💻 Author

Made by [@Incognitoanshh](https://github.com/Incognitoanshh)
