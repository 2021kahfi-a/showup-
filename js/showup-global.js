/**
 * Show Up — Global JavaScript Utilities
 * Master interactivity across all standardized pages
 */

// 1. Mobile Menu Drawer Toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.classList.toggle('open');
    if (menu.classList.contains('open')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }
}

// 2. Game Arena Slide-Out Drawer Toggle
function toggleGameMenu() {
  const drawer = document.getElementById('game-drawer');
  const backdrop = document.getElementById('game-backdrop');
  if (!drawer || !backdrop) return;

  if (drawer.style.right === '0px') {
    drawer.style.right = '-420px';
    backdrop.style.display = 'none';
    document.body.style.overflow = 'auto';
  } else {
    drawer.style.right = '0px';
    backdrop.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
}

// 3. Global Toast Notification
function showToast(message, duration = 3000) {
  let toast = document.getElementById('showup-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'showup-toast';
    toast.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: #0B132B;
      color: #FFFFFF;
      padding: 12px 24px;
      border-radius: 9999px;
      font-size: 14px;
      font-weight: 600;
      box-shadow: 0 10px 30px rgba(0,0,0,0.25);
      border: 1px solid rgba(255, 96, 38, 0.4);
      z-index: 9999;
      transform: translateY(100px);
      opacity: 0;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      display: flex;
      align-items: center;
      gap: 10px;
    `;
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span>✨</span> <span>${message}</span>`;
  toast.style.transform = 'translateY(0)';
  toast.style.opacity = '1';

  setTimeout(() => {
    toast.style.transform = 'translateY(100px)';
    toast.style.opacity = '0';
  }, duration);
}

// 4. Copy URL helper
function copyCurrentUrl() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    showToast('Tautan berhasil disalin ke clipboard!');
  }).catch(() => {
    showToast('Gagal menyalin tautan.');
  });
}
