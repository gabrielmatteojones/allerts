(function() {
  // Aspetta che la pagina sia caricata
  document.addEventListener("DOMContentLoaded", function() {
    if (!window.ALERT_CONFIG || !window.ALERT_CONFIG.active) return;

    const cfg = window.ALERT_CONFIG;
    const alertDiv = document.createElement("div");
    alertDiv.className = `usa-alert usa-alert--${cfg.type}`;
    alertDiv.innerHTML = `
      <div class="usa-alert__body">
        <h3 class="usa-alert__heading">${cfg.heading}</h3>
        <p class="usa-alert__text">${cfg.message}</p>
      </div>
    `;

    document.body.prepend(alertDiv);
  });
})();
