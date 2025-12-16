function showToast(_0x1ed4ef, _0x551fe3 = "info") {
  const _0x1710be = document.createElement("div");
  _0x1710be.textContent = _0x1ed4ef;
  _0x1710be.innerHTML = _0x1ed4ef;
  _0x1710be.style.position = 'fixed';
  _0x1710be.style.bottom = "1rem";
  _0x1710be.style.left = '50%';
  _0x1710be.style.transform = "translateX(-50%)";
  _0x1710be.style.background = _0x551fe3 === "error" ? "rgba(220, 38, 38, 0.9)" : "rgba(0,0,0,0.8)";
  _0x1710be.style.color = 'white';
  _0x1710be.style.padding = "0.5rem 1rem";
  _0x1710be.style.borderRadius = "6px";
  _0x1710be.style.zIndex = 0x270f;
  document.body.appendChild(_0x1710be);
  setTimeout(() => _0x1710be.remove(), 0xbb8);
}
function getNextAvailableAlias() {
  const _0x2e3cd4 = (window.lastProxyList || []).map(_0x111881 => _0x111881._name || _0x111881.alias).filter(Boolean);
  let _0x5841fe = 0x1;
  while (_0x2e3cd4.includes("proxy" + _0x5841fe)) {
    _0x5841fe++;
  }
  return 'proxy' + _0x5841fe;
}
function showConfirm(_0x69764a) {
  return new Promise(_0x17fd11 => {
    const _0x34e239 = document.createElement("div");
    _0x34e239.style.position = 'fixed';
    _0x34e239.style.top = 0x0;
    _0x34e239.style.left = 0x0;
    _0x34e239.style.width = "100vw";
    _0x34e239.style.height = '100vh';
    _0x34e239.style.background = "rgba(0,0,0,0.4)";
    _0x34e239.style.display = "flex";
    _0x34e239.style.alignItems = 'center';
    _0x34e239.style.justifyContent = 'center';
    _0x34e239.style.zIndex = 0x270f;
    const _0x379e4d = document.createElement("div");
    _0x379e4d.style.background = '#fff';
    _0x379e4d.style.padding = "1.5rem";
    _0x379e4d.style.borderRadius = "12px";
    _0x379e4d.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
    _0x379e4d.style.textAlign = 'center';
    _0x379e4d.style.maxWidth = "320px";
    _0x379e4d.style.minWidth = "250px";
    _0x379e4d.style.fontSize = '16px';
    _0x379e4d.style.fontWeight = "500";
    const _0x38e927 = document.createElement("div");
    _0x38e927.innerHTML = "<div style=\"font-size: 1.6rem;\">⚠️</div><div style=\"margin-top: 0.5rem;\">" + _0x69764a + '</div>';
    _0x38e927.style.marginBottom = "1.5rem";
    _0x379e4d.appendChild(_0x38e927);
    const _0x1673ec = document.createElement("div");
    _0x1673ec.style.display = "flex";
    _0x1673ec.style.justifyContent = 'space-around';
    const _0x43b056 = document.createElement("button");
    _0x43b056.textContent = "✅ Có";
    _0x43b056.style.padding = "0.4rem 1rem";
    _0x43b056.style.borderRadius = "6px";
    _0x43b056.style.border = "none";
    _0x43b056.style.background = "#10b981";
    _0x43b056.style.color = 'white';
    _0x43b056.style.cursor = "pointer";
    const _0x21b6d2 = document.createElement("button");
    _0x21b6d2.textContent = "❌ Không";
    _0x21b6d2.style.padding = "0.4rem 1rem";
    _0x21b6d2.style.borderRadius = "6px";
    _0x21b6d2.style.border = "none";
    _0x21b6d2.style.background = "#ef4444";
    _0x21b6d2.style.color = "white";
    _0x21b6d2.style.cursor = "pointer";
    _0x43b056.onclick = () => {
      document.body.removeChild(_0x34e239);
      _0x17fd11(true);
    };
    _0x21b6d2.onclick = () => {
      document.body.removeChild(_0x34e239);
      _0x17fd11(false);
    };
    _0x1673ec.appendChild(_0x43b056);
    _0x1673ec.appendChild(_0x21b6d2);
    _0x379e4d.appendChild(_0x1673ec);
    _0x34e239.appendChild(_0x379e4d);
    document.body.appendChild(_0x34e239);
    if (document.body.classList.contains("dark")) {
      _0x379e4d.style.background = "#1f2937";
      _0x379e4d.style.color = "#f9fafb";
    }
    document.body.appendChild(_0x34e239);
  });
}
function addLog(_0x2dfbb0) {
  const _0x37790e = document.querySelector("#logPanel .system-log");
  if (!_0x37790e) {
    return;
  }
  const _0x5c654b = new Date();
  const _0x437190 = _0x5c654b.toLocaleTimeString("vi-VN", {
    'hour12': false
  });
  const _0x571711 = '[' + _0x437190 + "] " + _0x2dfbb0;
  const _0x1aec15 = _0x37790e.textContent.split("\n").filter(_0x3739c4 => _0x3739c4.trim() !== '');
  _0x1aec15.unshift(_0x571711);
  while (_0x1aec15.length > 0x64) {
    _0x1aec15.pop();
  }
  _0x37790e.textContent = _0x1aec15.join("\n");
  _0x37790e.scrollTop = 0x0;
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
  localStorage.setItem("darkMode", document.body.classList.contains("dark"));
}
const arrow = document.getElementById("toggleTabsArrow");
const tabs = document.getElementById("mainTabs");

// Đảm bảo thanh tab luôn ở trạng thái mở khi trang tải
tabs.classList.add("open");
arrow.style.transform = "rotate(180deg)";

// Xóa hoàn toàn sự kiện nhấp chuột để người dùng không thể đóng nó
arrow.onclick = null;


function openModal(_0x85507 = false) {
  const _0x23aff7 = document.getElementById("proxyModal");
  _0x23aff7.style.display = 'flex';
  const _0x4f14cc = _0x23aff7.querySelectorAll("input, select");
  _0x4f14cc.forEach(_0x20f68d => _0x20f68d.value = '');
  if (!_0x85507) {
    delete _0x23aff7.dataset.editingAlias;
    const _0x31f634 = document.getElementById('proxy-remarks');
    _0x31f634.value = getNextAvailableAlias();
  }
  const _0xbed7bb = document.getElementById("proxy-type");
  _0xbed7bb.value = "http";
  _0xbed7bb.focus();
}
function editProxy(_0x204ac3) {
  const _0x2fcdd8 = window.lastProxyList?.[_0x204ac3];
  if (!_0x2fcdd8) {
    return;
  }
  openModal(true);
  document.getElementById("proxy-remarks").value = _0x2fcdd8.remarks || '';
  document.getElementById("proxy-type").value = (_0x2fcdd8.protocol || '').toLowerCase();
  document.getElementById("proxy-ip").value = _0x2fcdd8.ip || _0x2fcdd8.address || '';
  document.getElementById("proxy-port").value = _0x2fcdd8.port || '';
  document.getElementById("proxy-user").value = _0x2fcdd8.username || _0x2fcdd8.user || '';
  document.getElementById("proxy-password").value = _0x2fcdd8.password || _0x2fcdd8.pass || '';
  const _0x1596e9 = document.getElementById('proxyModal');
  _0x1596e9.dataset.editingAlias = _0x2fcdd8.alias || _0x2fcdd8._name || '';
}
function closeModal() {
  document.getElementById('proxyModal').style.display = "none";
}
function openBatchModal() {
  document.getElementById("batchModal").style.display = 'flex';
}
function closeBatchModal() {
  document.getElementById("batchModal").style.display = "none";
}
const addProxySaveButton = document.querySelector("#proxyModal .modal-buttons button:last-of-type");
if (addProxySaveButton) {
  addProxySaveButton.onclick = async () => {
    const _0x4c76d1 = document.getElementById("proxyModal");
    const _0x3df567 = document.getElementById("proxy-remarks").value.trim();
    const _0x44f783 = document.getElementById("proxy-type").value.trim();
    const _0x3dad6c = document.getElementById('proxy-ip').value.trim();
    const _0x1bd6e6 = document.getElementById('proxy-port').value.trim();
    const _0x43f53e = document.getElementById("proxy-user").value.trim();
    const _0x24975e = document.getElementById('proxy-password').value.trim();
    if (!_0x44f783 || !_0x3dad6c || !_0x1bd6e6) {
      showToast("Bạn phải nhập đủ Giao thức, IP và Port!");
      return;
    }
    const _0x5e8705 = _0x4c76d1.dataset.editingAlias;
    const _0x2d03d1 = _0x5e8705 || _0x3df567 || _0x3dad6c.replace(/\./g, '_');
    const _0x2375fc = (window.lastProxyList || []).map(_0x85e722 => _0x85e722._name || _0x85e722.alias);
    if (!/^[a-zA-Z0-9_-]+$/.test(_0x2d03d1)) {
      showToast("⚠️ Alias chỉ được chứa chữ, số, gạch dưới (_) hoặc gạch ngang (-)");
      return;
    }
    if (!_0x5e8705 && _0x2375fc.includes(_0x2d03d1)) {
      showToast("⚠️ Alias đã tồn tại. Vui lòng chọn tên khác.");
      return;
    }
    const _0x49bff8 = {
      ...(_0x5e8705 ? {
        'oldAlias': _0x5e8705
      } : {
        'alias': _0x2d03d1
      }),
      'remarks': _0x3df567,
      'protocol': _0x44f783,
      'ip': _0x3dad6c,
      'port': _0x1bd6e6,
      'username': _0x43f53e,
      'password': _0x24975e
    };
    fetch('/cgi-bin/add-proxy.sh?' + new URLSearchParams(_0x49bff8).toString()).then(_0xa96812 => _0xa96812.json()).then(_0x108ce1 => {
      if (_0x108ce1.success) {
        showToast(_0x5e8705 ? "✏️ Đã sửa proxy thành công!" : "➕ Đã thêm proxy mới!");
        _0x4c76d1.dataset.editingAlias = '';
        showTab('proxy');
        loadStatus();
        closeModal();
      } else {
        showToast("Lỗi khi lưu proxy: " + (_0x108ce1.error || _0x108ce1.message || "Lỗi không xác định"));
        addLog("❌ Lỗi khi lưu proxy '" + _0x2d03d1 + "': " + (_0x108ce1.error || _0x108ce1.message));
      }
    });
    addLog("➕ Đã thêm proxy '" + _0x2d03d1 + "'");
  };
}
function toggleWifiPassword() {
  const _0x10f1ea = document.getElementById("wifiPassword");
  if (_0x10f1ea) {
    _0x10f1ea.type = _0x10f1ea.type === "password" ? "text" : "password";
  }
}
function toggleInputPw() {
  const _0x57a57a = document.getElementById("proxy-password");
  if (_0x57a57a) {
    _0x57a57a.type = _0x57a57a.type === 'password' ? "text" : 'password';
  }
}
let alreadyTestedProxy = false;
/**
 * Hiển thị một tab cụ thể, ẩn các tab khác và thiết lập các tác vụ liên quan.
 * @param {string} tabName - Tên của tab cần hiển thị (ví dụ: 'dashboard', 'proxy').
 */
/**
 * Hiển thị một tab cụ thể, ẩn các tab khác và thiết lập các tác vụ liên quan.
 * @param {string} tabName - Tên của tab cần hiển thị (ví dụ: 'dashboard', 'proxy').
 */
function showTab(tabName) {
  // Bước 1: Tìm tất cả các nút tab và nội dung tab
  const tabButtons = document.querySelectorAll('.tab');
  const tabPanels = document.querySelectorAll(".tab-content");

  // Bước 2: Xóa lớp 'active' khỏi tất cả các nút và ẩn tất cả các nội dung
  tabButtons.forEach(button => button.classList.remove("active"));
  tabPanels.forEach(panel => panel.style.display = "none");

  // Bước 3: Kích hoạt nút và hiển thị nội dung của tab được chọn
  document.querySelector(`.tab[onclick*='${tabName}']`).classList.add('active');
  document.getElementById("tab-" + tabName).style.display = 'block';

  // Bước 4: Lưu tab hiện tại vào localStorage và cập nhật biến toàn cục
  localStorage.setItem("lastTab", tabName);
  currentTab = tabName;

  // Bước 5: Dừng bất kỳ tác vụ cập nhật tự động nào đang chạy
  if (currentPolling) {
    clearInterval(currentPolling);
  }

  // Bước 6: Thiết lập tác vụ cập nhật tự động mới dựa trên tab được chọn
  const POLLING_INTERVAL = 86400000; // 30 giây

  if (tabName === "dashboard") {
    loadStatus();
    currentPolling = setInterval(loadStatus, POLLING_INTERVAL);
  } else if (tabName === 'proxy') {
    loadStatus(() => {
      if (!alreadyTestedProxy && window.data?.['proxies']?.length) {
        window.data.proxies.forEach((proxy, index) => {
          testPingAuto(proxy.real_name, index);
          testTCPingAuto(proxy.real_name, index);
          testURLAuto(proxy.real_name, index);
        });
        alreadyTestedProxy = true;
      }
    });
    currentPolling = setInterval(loadStatus, POLLING_INTERVAL);
  } else if (tabName === "device") {
    // THAY ĐỔI: Đặt tab con mặc định là 'acl' khi tab 'device' được chọn
    currentSubTab = 'acl';

    const loadDeviceData = () => {
      const searchValue = document.getElementById("device-search")?.value.trim();
      // Nếu đang tìm kiếm, không tải lại dữ liệu
      if (searchValue && searchValue.length > 0) {
        return;
      }
      // Vì currentSubTab đã được đặt là 'acl', khối này sẽ luôn gọi renderAclTabInDevice()
      if (currentSubTab === "wifi") {
        loadDevicesByWifi();
      } else if (currentSubTab === "interface") {
        loadDevicesByInterface();
      } else if (currentSubTab === "acl") {
        renderAclTabInDevice();
      } else {
        loadDeviceMapping();
      }
    };
    loadDeviceData(); // Tải ngay lập tức
    currentPolling = setInterval(loadDeviceData, POLLING_INTERVAL);
  } else if (tabName === "log") {
    updateSystemLog();
    currentPolling = setInterval(updateSystemLog, POLLING_INTERVAL);
  } else {
    // Đối với các tab không cần cập nhật tự động
    currentPolling = null;
  }

  // Bước 7: Nếu rời khỏi tab 'proxy', đặt lại cờ đã kiểm tra proxy
  if (tabName !== 'proxy') {
    alreadyTestedProxy = false;
  }
}


window.onload = () => {
  if (localStorage.getItem("darkMode") === 'true') {
    document.body.classList.add("dark");
  }
  const _0x21507a = localStorage.getItem('lastTab') || "dashboard";
  document.querySelectorAll(".tab").forEach(_0x3a54c2 => _0x3a54c2.classList.remove('active'));
  document.querySelectorAll(".tab-content").forEach(_0x1c27c3 => _0x1c27c3.style.display = "none");
  showTab(_0x21507a);
  document.querySelector(".tab[onclick*='" + _0x21507a + "']")?.["classList"]["add"]("active");
  document.body.classList.remove("invisible");
  if (_0x21507a === "proxy") {
    loadStatus();
  }
};
loadConnectedDevices();
function updateTime() {
  const _0x1ca8bb = new Date();
  const _0x44b106 = _0x1ca8bb.toLocaleTimeString("vi-VN", {
    'hour12': false
  });
  document.getElementById('datetime').textContent = _0x44b106;
}
setInterval(updateTime, 0x3e8);
updateTime();
fetch('https://api.ipify.org?format=json').then(_0x118319 => _0x118319.json()).then(_0x8c98a6 => {
  document.getElementById("publicIP").textContent = "IP: " + _0x8c98a6.ip;
})['catch'](() => {
  document.getElementById("publicIP").textContent = "IP: Không xác định";
});
window.onload = () => {
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
  }
  const _0x39fb94 = localStorage.getItem('lastTab') || 'dashboard';
  showTab(_0x39fb94);
  document.querySelectorAll(".tab").forEach(_0xf8d822 => _0xf8d822.classList.remove("active"));
  document.querySelector(".tab[onclick*='" + _0x39fb94 + "']")?.["classList"]['add']("active");
  document.body.classList.remove("invisible");
  if (_0x39fb94 === "proxy") {
    loadStatus();
  }
};
loadConnectedDevices();
async function toggleMainSwitch(_0x2d7089) {
  await fetch("/lua-api/acl_api.lua?action=set_main_switch", {
    'method': "POST",
    'body': JSON.stringify({
      'enabled': _0x2d7089
    }),
    'headers': {
      'Content-Type': "application/json"
    }
  }).then(_0x1bccc8 => _0x1bccc8.json()).then(_0x3c77e9 => {
    const _0x1aea28 = new Date().toLocaleTimeString("vi-VN");
    const _0x39ac14 = _0x2d7089 ? "BẬT" : "TẮT";
    const _0x38796a = '[' + _0x1aea28 + "] ✅ Main Switch đã " + _0x39ac14;
    const _0x1bb796 = document.querySelector(".system-log");
    if (_0x1bb796) {
      _0x1bb796.textContent += "\n" + _0x38796a;
      _0x1bb796.scrollTop = _0x1bb796.scrollHeight;
    }
    if (addLog) {
      addLog("🌐 Main Switch: " + _0x39ac14);
    }
    document.getElementById("mainSwitch").checked = !!_0x2d7089;
    document.getElementById("main-proxy-switch").checked = !!_0x2d7089;
    if (loadStatus) {
      loadStatus();
    }
  })['catch'](_0x3c88f9 => {
    showToast("Lỗi khi bật/tắt Main Switch!");
    if (addLog) {
      addLog("❌ Lỗi khi bật/tắt Main Switch!");
    }
    console.error(_0x3c88f9);
  });
}
document.addEventListener('DOMContentLoaded', () => {
  const _0x5d9f5b = document.getElementById("mainSwitch");
  const _0x53572d = document.getElementById('main-proxy-switch');
  if (_0x5d9f5b) {
    _0x5d9f5b.addEventListener("change", () => {
      toggleMainSwitch(_0x5d9f5b.checked);
    });
  }
  if (_0x53572d) {
    _0x53572d.addEventListener('change', () => {
      toggleMainSwitch(_0x53572d.checked);
    });
  }
  const _0xe4d3a = localStorage.getItem("lastTab") || "dashboard";
  showTab(_0xe4d3a);
  document.body.classList.remove("invisible");
});



function formatBytes(_0x249f8e) {
  let _0x1edca5 = parseInt(_0x249f8e, 0xa);
  if (isNaN(_0x1edca5)) {
    return "...";
  }
  if (_0x1edca5 >= 1048576) {
    return (_0x1edca5 / 0x400 / 0x400).toFixed(0x2) + " GB";
  }
  if (_0x1edca5 >= 0x400) {
    return Math.round(_0x1edca5 / 0x400) + " MB";
  }
  return _0x1edca5 + " KB";
}


/**
 * Tải trạng thái hệ thống từ máy chủ và cập nhật giao diện người dùng.
 * Hàm này lấy thông tin về proxy, RAM, ROM, và các thiết bị kết nối,
 * sau đó hiển thị chúng trên trang web.
 */
function loadStatus() {
  // Bước 1: Gửi yêu cầu đến endpoint API để lấy dữ liệu trạng thái
  fetch("/cgi-bin/status.sh")
    .then(response => response.json()) // Chuyển đổi phản hồi sang định dạng JSON
    .then(statusData => {
      // Lưu danh sách proxy vào biến toàn cục để sử dụng ở nơi khác
      window.lastProxyList = statusData.proxies || [];
      const proxyList = statusData.proxies || [];

      // Bước 2: Tính toán số lượng proxy
      const totalProxies = proxyList.length;
      const onlineProxies = proxyList.filter(proxy => proxy.status === "online").length;
      const offlineProxies = totalProxies - onlineProxies;
      const isProxyEnabled = statusData.proxy_enabled === '1';

      // Bước 3: Cập nhật phần "Trạng thái nhanh" (Quick Status)
      const quickStatusElement = document.getElementById("quick-status");
      if (quickStatusElement) {
        quickStatusElement.innerHTML = `
          <div><strong>🌐 IP:</strong> ${statusData.ip}</div>
          <div><strong>📡 Proxy:</strong> ${isProxyEnabled ? "🟢 Bật" : "🔴 Tắt"}</div>
          <div><strong>🕒 Uptime:</strong> ${statusData.uptime}</div>
          <div><strong>🧠 RAM:</strong> ${formatBytes(statusData.ram_used)} / ${formatBytes(statusData.ram_total)} (${statusData.ram_percent}%)</div>
          <div><strong>💾 ROM:</strong> ${formatBytes(statusData.rom_used)} / ${formatBytes(statusData.rom_total)} (${statusData.rom_percent}%)</div>
          <div><strong>⚙️ Load Avg:</strong> ${statusData.loadavg}</div>
        `;
      }

      // Bước 4: Cập nhật các thông tin chi tiết của hệ thống
      document.getElementById("hostname").textContent = statusData.hostname || '-';
      document.getElementById('model').textContent = statusData.model || '-';
      document.getElementById("uptime").textContent = statusData.uptime || '-';
      document.getElementById("kernel").textContent = statusData.kernel || '-';
      document.getElementById('version').textContent = statusData.version || '-';
      document.getElementById('loadavg').textContent = statusData.loadavg || '-';

      // Bước 5: Cập nhật thông tin và thanh tiến trình cho RAM
      // === CÁC TRƯỜNG BỊ THIẾU ĐÃ ĐƯỢC THÊM VÀO LẠI ===
      document.getElementById('ram-total').textContent = formatBytes(statusData.ram_total);
      document.getElementById("ram-used").textContent = formatBytes(statusData.ram_used);
      document.getElementById("ram-buffer").textContent = formatBytes(statusData.ram_buffer);
      document.getElementById('ram-cache').textContent = formatBytes(statusData.ram_cache);
      document.getElementById('ram-percent').textContent = statusData.ram_percent + " %";

      const ramUsagePercentage = parseInt(statusData.ram_total, 10) > 0
        ? (parseInt(statusData.ram_used, 10) / parseInt(statusData.ram_total, 10)) * 100
        : 0;
      const ramProgressBar = document.querySelector(".ram-progress-bar");
      if (ramProgressBar) {
        ramProgressBar.style.width = ramUsagePercentage.toFixed(1) + '%';
      }
      const ramTextElement = document.getElementById('ram-text');
      if (ramTextElement) {
        ramTextElement.textContent = `Sử dụng RAM: ${formatBytes(statusData.ram_used)} / ${formatBytes(statusData.ram_total)} (${ramUsagePercentage.toFixed(1)}%)`;
      }

      // Bước 6: Cập nhật thông tin và thanh tiến trình cho ROM
      // === CÁC TRƯỜNG BỊ THIẾU ĐÃ ĐƯỢC THÊM VÀO LẠI ===
      document.getElementById("rom-total").textContent = formatBytes(statusData.rom_total);
      document.getElementById('rom-used').textContent = formatBytes(statusData.rom_used);
      document.getElementById("rom-free").textContent = formatBytes(statusData.rom_free);
      document.getElementById("rom-percent").textContent = statusData.rom_percent + " %";

      const romUsagePercentage = parseInt(statusData.rom_total, 10) > 0
        ? (parseInt(statusData.rom_used, 10) / parseInt(statusData.rom_total, 10)) * 100
        : 0;
      const romProgressBar = document.querySelector('.rom-progress-bar');
      if (romProgressBar) {
        romProgressBar.style.width = romUsagePercentage.toFixed(1) + '%';
      }
      const romTextElement = document.getElementById("rom-text");
      if (romTextElement) {
        romTextElement.textContent = `Sử dụng ROM: ${formatBytes(statusData.rom_used)} / ${formatBytes(statusData.rom_total)} (${romUsagePercentage.toFixed(1)}%)`;
      }

      // Bước 7: Cập nhật số lượng proxy và trạng thái của công tắc chính
      document.getElementById("proxy-total").textContent = totalProxies;
      document.getElementById("proxy-online").textContent = onlineProxies + " ✅";
      document.getElementById("proxy-offline").textContent = offlineProxies + " ❌";
      document.getElementById("mainSwitch").checked = isProxyEnabled;
      document.getElementById("main-proxy-switch").checked = isProxyEnabled;

      // Bước 8: Lưu lại các giá trị bộ lọc hiện tại để khôi phục sau
      const currentTypeFilter = document.getElementById("proxy-type-filter")?.value || '';
      const currentStatusFilter = document.getElementById("proxy-status-filter")?.value || '';
      const currentSearchValue = document.getElementById('proxy-search')?.value || '';

      // Bước 9: Hiển thị danh sách các proxy
      const proxyListContainer = document.getElementById("proxy-list");
      if (proxyListContainer && proxyList.length) {
        // Tạo HTML cho mỗi thẻ proxy bằng template literal
        proxyListContainer.innerHTML = proxyList.map((proxy, index) => `
          <div class="device-card">
            <div class="flex items-center w-full">
              <div class="flex items-center gap-2">
                <input type="checkbox" class="proxy-checkbox" data-alias="${proxy._name || proxy.real_name}">
                <button class="icon-btn" onclick="deleteProxy('${proxy.real_name}')">🗑️</button>
                <button class="icon-btn" onclick="toggleIp(${index}, '${proxy.alias}')">👁️</button>
                <button class="icon-btn" onclick="editProxy(${index})">✏️</button>
              </div>
            </div>
            <h2 class="proxy-alias text-base font-semibold truncate">🏷️ Tên: ${proxy.alias || "Không tên"}</h2>
            <p>
              <span style="color:#2563eb; font-weight:600;">🌐 IP:</span>
              <span
                id="ip-${index}"
                class="proxy-ip ip-highlight"
                title="Click để copy"
                onclick="copyToClipboard('${proxy.ip}')"
                style="cursor:pointer;"
              >${proxy.ip}</span>
            </p>
            <p>🔌 Port: <span class="proxy-port">${proxy.port}</span></p>
            <p>📡 Protocol: <span class="proxy-protocol">${proxy.protocol}</span></p>
            
          </div>
        `).join('');

        // Bắt đầu kiểm tra tự động cho mỗi proxy
        
      } else {
        proxyListContainer.innerHTML = "<p class='text-gray-500'>Không có proxy nào.</p>";
      }

      // Bước 10: Khôi phục lại giá trị của các bộ lọc và áp dụng chúng
      document.getElementById("proxy-type-filter").value = currentTypeFilter;
      document.getElementById("proxy-status-filter").value = currentStatusFilter;
      document.getElementById("proxy-search").value = currentSearchValue;
      filterProxies();

      // Bước 11: Khôi phục trạng thái các checkbox đã được chọn
      selectedAliases.forEach(alias => {
        const checkbox = document.querySelector(`.proxy-checkbox[data-alias="${alias}"]`);
        if (checkbox) {
          checkbox.checked = true;
        }
      });
      updateActionButtonsVisibility();

      // Bước 12: Thêm sự kiện lắng nghe cho các checkbox và cập nhật trạng thái ẩn/hiện IP
      document.querySelectorAll(".proxy-checkbox").forEach(checkbox => {
        const alias = checkbox.dataset.alias;
        const index = checkbox.dataset.index;
        let ipElement = document.getElementById(`ip-${index}`);
        if (!ipElement) {
          ipElement = checkbox.closest('.device-card')?.querySelector("[id^='ip-']");
        }
        if (ipElement && ipHiddenState[alias]) {
          ipElement.classList.add('blur-sm');
        } else if (ipElement) {
          ipElement.classList.remove("blur-sm");
        }

        checkbox.addEventListener("change", () => {
          const checkedBoxes = document.querySelectorAll(".proxy-checkbox:checked");
          selectedAliases = Array.from(checkedBoxes).map(cb => cb.dataset.alias);
          updateActionButtonsVisibility();
        });
      });

      // Bước 13: Kiểm tra trạng thái proxy và ghi log nếu có thay đổi
      const systemLogElement = document.querySelector(".system-log");
      if (systemLogElement && window.lastProxyEnabled !== isProxyEnabled) {
        const timeString = new Date().toLocaleTimeString("vi-VN");
        const statusMessage = isProxyEnabled ? "✅ Proxy hiện đang BẬT" : "⛔ Proxy hiện đang TẮT";
        systemLogElement.textContent += `\n[${timeString}] ${statusMessage}`;
        systemLogElement.scrollTop = systemLogElement.scrollHeight;
        window.lastProxyEnabled = isProxyEnabled;
      }

      // Bước 14: Tải lại danh sách các thiết bị đã kết nối
      loadConnectedDevices();

    })
    .catch(() => {
      // Xử lý lỗi nếu không thể tải dữ liệu
      const quickStatusElement = document.getElementById("quick-status");
      if (quickStatusElement) {
        quickStatusElement.innerHTML = "<p class='text-red-500'>⚠️ Không thể tải trạng thái hệ thống.</p>";
      }
    });
}





window.loadStatus = loadStatus;
let previousDevices = [];
/**
 * Tải danh sách các thiết bị đã kết nối, so sánh với danh sách trước đó
 * để ghi lại các thiết bị mới hoặc đã ngắt kết nối, sau đó cập nhật giao diện.
 */
function loadConnectedDevices() {
  // Bước 1: Gửi yêu cầu đến API để lấy danh sách thiết bị
  fetch('/cgi-bin/devices.sh')
    .then(response => response.json()) // Bước 2: Chuyển phản hồi sang dạng JSON
    .then(devices => {
      // Lấy các phần tử DOM cần thiết
      const deviceListElement = document.getElementById("connected-device-list");
      if (!deviceListElement) {
        // Nếu không tìm thấy phần tử để hiển thị, dừng lại
        return;
      }

      const currentTime = Date.now();
      const timeString = new Date().toLocaleTimeString("vi-VN");
      const systemLogElement = document.querySelector(".system-log");

      // Bước 3: Duyệt qua danh sách thiết bị hiện tại để so sánh với danh sách cũ
      devices.forEach(currentDevice => {
        // Tìm thiết bị này trong danh sách các thiết bị đã biết (trong `previousDevices`)
        const previousDevice = previousDevices.find(prevDevice => prevDevice.mac === currentDevice.mac);

        // Nếu không tìm thấy, đây là thiết bị mới
        if (!previousDevice) {
          currentDevice.disconnectedAt = null; // Đánh dấu là chưa từng ngắt kết nối
          previousDevices.push(currentDevice); // Thêm vào danh sách đã biết
          if (systemLogElement) {
            // Ghi log thiết bị mới
            systemLogElement.textContent += `\n[${timeString}] 🆕 Thiết bị mới: ${currentDevice.hostname} (${currentDevice.ip})`;
          }
        } else {
          // Nếu đã tìm thấy, cập nhật thông tin của nó
          previousDevice.hostname = currentDevice.hostname;
          previousDevice.ip = currentDevice.ip;
          previousDevice.status = currentDevice.status;
          previousDevice.wifi = currentDevice.wifi;

          // Nếu trạng thái hiện tại là "offline" và nó chưa được ghi nhận là ngắt kết nối trước đó
          if (currentDevice.status !== "online" && !previousDevice.disconnectedAt) {
            previousDevice.disconnectedAt = currentTime; // Ghi lại thời gian ngắt kết nối
            if (systemLogElement) {
              // Ghi log thiết bị mất kết nối
              systemLogElement.textContent += `\n[${timeString}] 🔴 Thiết bị ${currentDevice.mac} mất kết nối`;
            }
          }

          // Nếu trạng thái là "online", xóa thời gian ngắt kết nối
          if (currentDevice.status === 'online') {
            previousDevice.disconnectedAt = null;
          }
        }
      });

      // Bước 4: Lọc ra chỉ những thiết bị đang online
      const onlineDevices = previousDevices.filter(device => device.status === "online");

      // Bước 5: Cập nhật tiêu đề hiển thị số lượng thiết bị kết nối
      const deviceCountTitleElement = document.getElementById('device-count-title');
      if (deviceCountTitleElement) {
        deviceCountTitleElement.textContent = `📶 Thiết bị kết nối (${onlineDevices.length})`;
      }

      // Bước 6: Tạo và hiển thị danh sách các thiết bị online trên giao diện
      // Sử dụng template literals để tạo HTML dễ đọc hơn
      deviceListElement.innerHTML = onlineDevices.map(device => `
        <div class="flex justify-between items-center border-b py-1">
          <div class="w-1/3 truncate">${device.hostname === '*' ? "unknown" : device.hostname}</div>
          <div class="w-1/3 truncate">
            ${device.ip}<br>
            <span class="text-xs text-gray-400">
              ${device.mac}
              ${device.wifi ? ` • WiFi: ${device.wifi}` : device.iface ? ` • ${device.iface}` : ''}
            </span>
          </div>
          <div class="w-1/3 text-right">
            🟢
          </div>
        </div>
      `).join('');

      // Bước 7: Tự động cuộn xuống cuối của hộp log
      if (systemLogElement) {
        systemLogElement.scrollTop = systemLogElement.scrollHeight;
      }
    })
    .catch(() => {
      // Bước 8: Xử lý lỗi nếu không thể tải dữ liệu
      const errorElement = document.getElementById("connected-device-list");
      if (errorElement) {
        errorElement.innerHTML = "<div class='text-red-500 italic'>Không thể tải thiết bị kết nối.</div>";
      }
    });
}



















/**
 * Xóa một proxy dựa trên alias của nó sau khi xác nhận với người dùng.
 * @param {string} alias - Tên định danh (alias) của proxy cần xóa.
 */
async function deleteProxy(alias) {
  // Bước 1: Kiểm tra xem alias có hợp lệ không
  if (!alias || alias.trim() === '') {
    showToast("❌ Alias rỗng hoặc không hợp lệ");
    return;
  }

  // Bước 2: Hiển thị hộp thoại xác nhận và đợi người dùng phản hồi
  const isConfirmed = await showConfirm(`Bạn có chắc muốn xoá proxy '${alias}'?`);
  if (!isConfirmed) {
    // Nếu người dùng nhấn "Không", dừng hàm lại
    return;
  }

  try {
    // Bước 3: Gửi yêu cầu xóa proxy đến máy chủ
    const response = await fetch('/cgi-bin/delete-proxy.sh?alias=' + encodeURIComponent(alias));
    const result = await response.json();

    // Bước 4: Kiểm tra kết quả trả về từ máy chủ
    if (result.status === 'ok') {
      // Nếu xóa thành công
      showToast("🗑️ Đã xoá proxy!");
      loadStatus(); // Tải lại danh sách trạng thái để cập nhật giao diện
      if (typeof addLog === "function") {
        addLog(`🧪 Đã gửi xoá alias: ${alias}`);
      }
    } else {
      // Nếu máy chủ trả về lỗi
      const errorMessage = result.message || result.error || "Không xác định";
      showToast(`❌ Lỗi khi xoá proxy: ${errorMessage}`);
      if (typeof addLog === "function") {
        addLog(`❌ Lỗi xoá alias: ${alias} - ${errorMessage}`);
      }
    }
  } catch (error) {
    // Bước 5: Xử lý lỗi mạng hoặc lỗi xử lý JSON
    showToast("❌ Lỗi hệ thống khi xoá proxy");
    if (typeof addLog === "function") {
      addLog(`❌ Lỗi hệ thống khi xoá alias: ${alias} - ${error.message}`);
    }
  }
}

function parseQuickAdd() {
  const _0x4063c0 = document.getElementById('quick-add-input').value.trim();
  if (!_0x4063c0) {
    return showToast("Vui lòng nhập chuỗi dạng ip:port hoặc ip:port:user:pass");
  }
  const _0x3a2a3e = _0x4063c0.split(':');
  if (_0x3a2a3e.length < 0x2 || _0x3a2a3e.length > 0x4) {
    return showToast("Định dạng không hợp lệ. Ví dụ: 1.2.3.4:1080:user:pass");
  }
  const [_0x484221, _0x37ff16, _0xfc5e8c, _0x5dfc3c] = _0x3a2a3e;
  document.getElementById("proxy-ip").value = _0x484221 || '';
  document.getElementById('proxy-port').value = _0x37ff16 || '';
  document.getElementById("proxy-user").value = _0xfc5e8c || '';
  document.getElementById("proxy-password").value = _0x5dfc3c || '';
  document.getElementById('proxy-remarks').value = getNextAvailableAlias();
}
function importProxyList() {
  const _0x1dc99b = document.getElementById('proxy-protocol').value;
  const _0x36fda0 = document.getElementById("proxy-list-text").value.trim();
  const _0x2e5b50 = document.getElementById("proxy-file");
  if (!_0x1dc99b) {
    showToast("⚠️ Vui lòng chọn giao thức (HTTP hoặc SOCKS5)");
    return;
  }
  let _0xf4431c = [];
  if (_0x36fda0) {
    _0xf4431c = _0x36fda0.split("\n").map(_0x274b93 => _0x274b93.trim()).filter(Boolean);
    processProxyLines(_0xf4431c, _0x1dc99b);
  } else {
    if (_0x2e5b50.files.length > 0x0) {
      const _0x11ea42 = new FileReader();
      _0x11ea42.onload = () => {
        _0xf4431c = _0x11ea42.result.split("\n").map(_0x44d67d => _0x44d67d.trim()).filter(Boolean);
        processProxyLines(_0xf4431c, _0x1dc99b);
      };
      _0x11ea42.readAsText(_0x2e5b50.files[0x0]);
    } else {
      showToast("⚠️ Vui lòng nhập danh sách hoặc chọn file .txt");
    }
  }
}
function getNextAvailableAliasNumber() {
  const _0x46e68a = (window.lastProxyList || []).map(_0x38f86d => _0x38f86d.alias || _0x38f86d._name || '');
  let _0x2b1b06 = 0x1;
  while (_0x46e68a.includes('proxy' + _0x2b1b06)) {
    _0x2b1b06++;
  }
  return _0x2b1b06;
}
async function processProxyLines(_0x11ff9d, _0xe241a) {
  const _0x53620f = (window.lastProxyList || []).map(_0x1db892 => _0x1db892.alias || _0x1db892._name || '');
  let _0x3070b1 = 0x0;
  _0x53620f.forEach(_0x4adba6 => {
    const _0x1eeb92 = _0x4adba6.match(/^proxy(\d+)$/);
    if (_0x1eeb92) {
      _0x3070b1 = Math.max(_0x3070b1, parseInt(_0x1eeb92[0x1], 0xa));
    }
  });
  let _0x333ca0 = _0x3070b1 + 0x1;
  for (let _0x4b8d67 = 0x0; _0x4b8d67 < _0x11ff9d.length; _0x4b8d67++) {
    const _0x1f76be = _0x11ff9d[_0x4b8d67];
    const _0x195330 = _0x1f76be.split(':');
    if (_0x195330.length < 0x2) {
      showToast("❌ Dòng " + (_0x4b8d67 + 0x1) + " không hợp lệ");
      continue;
    }
    const [_0x5e9d10, _0x1433ce, _0x1e9556 = '', _0x30a3c3 = ''] = _0x195330;
    if (!_0x5e9d10 || !_0x1433ce) {
      showToast("❌ Dòng " + (_0x4b8d67 + 0x1) + " thiếu IP hoặc Port");
      continue;
    }
    const _0x586496 = "proxy" + _0x333ca0++;
    const _0x4d6b15 = new URLSearchParams({
      'alias': _0x586496,
      'remarks': _0x586496,
      'protocol': _0xe241a,
      'ip': _0x5e9d10,
      'port': _0x1433ce,
      'username': _0x1e9556,
      'password': _0x30a3c3
    });
    try {
      const _0x297214 = await fetch("/cgi-bin/add-proxy.sh?" + _0x4d6b15.toString());
      const _0x7fb936 = await _0x297214.json();
      if (_0x7fb936.success) {
        addLog("➕ Đã thêm proxy: " + _0x586496);
        await new Promise(_0x2ea8b4 => setTimeout(_0x2ea8b4, 0x64));
      } else {
        showToast("❌ Lỗi dòng " + (_0x4b8d67 + 0x1) + ": " + _0x7fb936.message);
      }
    } catch (_0x472ac9) {
      showToast("❌ Không thể thêm proxy dòng " + (_0x4b8d67 + 0x1));
    }
  }
  closeBatchModal();
  loadStatus();
}
function renderDeviceMappingUI(_0x24e803, _0x439a8b = "all") {
  const _0x22cbdc = document.getElementById("deviceMappingContainer");
  if (!_0x22cbdc) {
    return;
  }
  _0x22cbdc.innerHTML = '';
  const _0x3c35d6 = _0x439a8b === 'wifi' ? _0x24e803.wifi : _0x24e803.interfaces;
  if (!Array.isArray(_0x3c35d6)) {
    console.error("❌ Dữ liệu không hợp lệ:", _0x3c35d6);
    _0x22cbdc.innerHTML = "<div class='text-red-500'>❌ Không thể hiển thị dữ liệu</div>";
    return;
  }
  _0x22cbdc.innerHTML = _0x3c35d6.map(_0x340eb7 => {
    const _0x126dcc = _0x340eb7.devices?.["filter"]((_0x34e809, _0x590680, _0x294946) => _0x34e809.ip && /^\d+\.\d+\.\d+\.\d+$/.test(_0x34e809.ip) && _0x34e809.mac && _0x34e809.mac !== '00:00:00:00:00:00' && _0x294946.findIndex(_0x2116d2 => _0x2116d2.mac === _0x34e809.mac && _0x2116d2.ip === _0x34e809.ip) === _0x590680) || [];
    _0x340eb7.devices = _0x126dcc;
    let _0x3c079d = _0x340eb7.iface ? "interface" : _0x340eb7.ssid ? 'wifi' : '';
    let _0x457f88 = _0x340eb7.iface || _0x340eb7.ssid || '';
    let _0x5f095f = '';
    let _0x5bb785 = '';
    if (_0x439a8b === "interface" && _0x3c079d === "interface") {
      _0x5f095f = "<button class=\"absolute top-2 right-12 text-xs bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded z-10\"\n    onclick=\"deleteSingle('" + _0x3c079d + "', '" + _0x457f88 + "')\">🗑️</button>";
      _0x5bb785 = "<button class=\"absolute top-2 right-2 text-xs bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded z-10\"\n    onclick=\"editDevice('" + _0x457f88 + "')\">✏️</button>";
    } else {
      if (_0x439a8b === 'wifi' && _0x3c079d === "wifi") {
        _0x5f095f = "<button class=\"absolute top-2 right-12 text-xs bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded z-10\"\n    onclick=\"deleteSingle('" + _0x3c079d + "', '" + _0x457f88 + "')\">🗑️</button>";
        _0x5bb785 = "<button class=\"absolute top-2 right-2 text-xs bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded z-10\"\n    onclick=\"editWifi('" + _0x457f88 + "')\">✏️</button>";
      } else if (_0x439a8b === "all" && (_0x3c079d === "interface" || _0x3c079d === 'wifi')) {
        _0x5f095f = "<button class=\"absolute top-0.20 right-1 text-xs bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded z-10\"\n    onclick=\"deleteSingle('" + _0x3c079d + "', '" + _0x457f88 + "')\">🗑️</button>";
        _0x5bb785 = '';
      }
    }
    return "\n      <div class=\"device-card border rounded-lg shadow-sm p-3 text-sm bg-white dark:bg-gray-800 relative\" data-iface=\"" + (_0x340eb7.iface || '') + "\">\n        <div class=\"flex items-start gap-2\">\n        <!-- <input type=\"checkbox\" class=\"device-checkbox mt-1\" data-type=\"" + _0x3c079d + "\" data-id=\"" + _0x457f88 + "\" onchange=\"updateDeviceActionButtons()\" /> -->\n          <div class=\"flex-1 relative\">\n           <!-- " + _0x5f095f + "\n            " + _0x5bb785 + " -->\n            <div class=\"font-semibold mb-1\">\n              🌐 <span class=\"text-gray-700 dark:text-gray-300\">Interface:</span> " + (_0x340eb7["interface"] || '-') + "<br>\n              🧩 <span class=\"text-gray-700 dark:text-gray-300\">Device:</span> " + (_0x340eb7.iface || '-') + "\n            </div>\n            <div>\n              📡 <span class=\"text-gray-700 dark:text-gray-300\">IP:</span> " + (_0x340eb7.ip || '-') + "\n            </div>\n            <div>\n              🔗 <span class=\"text-gray-700 dark:text-gray-300\">MAC:</span> " + (_0x340eb7.mac || '-') + "\n            </div>\n            <div>\n              📤 TX: " + (_0x340eb7.tx || 0x0) + " | 📥 RX: " + (_0x340eb7.rx || 0x0) + "\n            </div>\n            <div>\n              🧭 Proxy: " + (_0x340eb7.proxy || '-') + "\n            </div>\n            <div class=\"" + (_0x340eb7.proxy && _0x340eb7.proxy !== '-' ? 'text-green-600' : "text-red-600") + " mt-1\">\n              ● " + (_0x340eb7.proxy && _0x340eb7.proxy !== '-' ? "Đã kết nối" : "Không sử dụng proxy") + "\n            </div>\n            <div class=\"text-xs text-gray-800 dark:text-gray-100 max-h-[120px] overflow-y-auto pr-1\">              \n            <div class=\"font-semibold mb-1\">Thiết bị:</div>\n              " + (_0x340eb7.devices.length > 0x0 ? _0x340eb7.devices.map(_0x3e97bb => "\n                    <div class=\"ml-2 pb-1 mb-1 border-b border-gray-200 dark:border-gray-600\">\n                      <div class=\"font-medium truncate " + (_0x3e97bb.hostname === '*' ? "text-gray-400 italic" : '') + "\">\n                        🖥 " + (_0x3e97bb.hostname === '*' ? "(ẩn)" : _0x3e97bb.hostname) + "\n                      </div>\n                      <div class=\"text-xs text-gray-800 dark:text-gray-100\">\n                        " + _0x3e97bb.ip + " - " + _0x3e97bb.mac + " " + (_0x3e97bb.wifi ? "• WiFi: " + _0x3e97bb.wifi : '') + "\n                      </div>\n                    </div>\n                  ").join('') : "<div class=\"ml-2 text-gray-400 italic\">Không có thiết bị</div>") + "\n            </div>\n          </div>\n        </div>\n      </div>\n    ";
  }).join('');
  _0x3c35d6.forEach(_0x5cb1c0 => {});
}
let lastSearchKeyword = '';
let hasReloadedAfterClear = false;
function onSearchInput() {
  const _0x55d049 = document.getElementById('device-search').value.trim().toLowerCase();
  lastSearchKeyword = _0x55d049;
  hasReloadedAfterClear = false;
  isSearching = !!_0x55d049;
  filterDevices();
}
function filterDevices() {
  const _0x2cb5a8 = lastSearchKeyword;
  const _0x1ff693 = document.querySelectorAll("#deviceMappingContainer .device-card");
  _0x1ff693.forEach(_0x31b66e => {
    const _0x7670f6 = _0x31b66e.textContent.toLowerCase();
    _0x31b66e.style.display = _0x7670f6.includes(_0x2cb5a8) ? '' : 'none';
  });
}
setInterval(() => {
  const _0x499d75 = document.getElementById('device-search').value.trim();
  if (_0x499d75.length === 0x0 && lastSearchKeyword.length > 0x0 && !hasReloadedAfterClear) {
    lastSearchKeyword = '';
    hasReloadedAfterClear = true;
    loadDeviceMapping();
  }
}, 0x3e8);
async function deleteAllDevices() {
  if (!(await showConfirm("Bạn có chắc muốn xóa TẤT CẢ interface và WiFi?"))) {
    return;
  }
  if (data.interfaces && Array.isArray(data.interfaces)) {
    for (const _0x486b36 of data.interfaces) {
      if (_0x486b36.iface) {
        await deleteSingle("interface", _0x486b36.iface);
      }
    }
  }
  if (data.wifi && Array.isArray(data.wifi)) {
    for (const _0x438e81 of data.wifi) {
      if (_0x438e81.ssid) {
        await deleteSingle("wifi", _0x438e81.ssid);
      }
    }
  }
  showToast("🗑️ Đã xóa tất cả interface và WiFi!");
  loadDeviceMapping();
}
async function deleteSingle(_0x1b3e60, _0x37cefd) {
  if (_0x1b3e60 === "interface") {
    await deleteDevice(_0x37cefd);
  } else if (_0x1b3e60 === 'wifi') {
    await deleteWifi(_0x37cefd);
  }
}






let currentPolling = null;
let currentTab = 'dashboard';
let currentSubTab = "all";
/**
 * Hiển thị một tab con (sub-tab) cụ thể trong phần "Thiết bị".
 * @param {string} subtabName - Tên của tab con cần hiển thị (ví dụ: 'wifi', 'interface', 'acl').
 */
function showDeviceSubtab(subtabName) {
  // Bước 1: Cập nhật tab con hiện tại
  currentSubTab = subtabName;

  // Bước 2: Xóa lớp 'active' khỏi tất cả các nút tab con
  // Cách này gọn gàng hơn là lấy từng phần tử một
  const allSubtabButtons = document.querySelectorAll('[id^="subtab-"]');
  allSubtabButtons.forEach(button => button.classList.remove('active'));

  // Bước 3: Thêm lớp 'active' vào nút tab con được chọn
  const activeSubtabButton = document.getElementById("subtab-" + subtabName);
  if (activeSubtabButton) {
    activeSubtabButton.classList.add("active");
  }

  // Bước 4: Hiển thị thông báo đang tải trong khi chờ dữ liệu
  document.getElementById('deviceMappingContainer').innerHTML = "⏳ Đang tải...";

  // Bước 5: Tải dữ liệu tương ứng với tab con được chọn
  if (subtabName === "wifi") {
    loadDevicesByWifi();
  } else if (subtabName === "interface") {
    loadDevicesByInterface();
  } else if (subtabName === "acl") {
    renderAclTabInDevice();
  } else {
    // Mặc định là tab "Tất cả" (all)
    renderAclTabInDevice();
  }

  // Bước 6: Đặt lại danh sách các thiết bị đã chọn
  selectedDeviceIds = [];

  // Bước 7: Cập nhật trạng thái của các nút hành động sau một khoảng thời gian ngắn
  // Điều này đảm bảo UI đã được cập nhật trước khi hàm được gọi
  setTimeout(updateDeviceActionButtons, 100);
}










function getProxyNameByIface(_0x7f2fa) {
  const _0x244047 = _0x7f2fa.replace("br-lan", '');
  return "proxy" + _0x244047;
}
async function fetchAclList() {
  try {
    const _0x541b52 = await fetch("/lua-api/acl_api.lua?action=list");
    if (!_0x541b52.ok) {
      return [];
    }
    const _0x14d90b = await _0x541b52.json();
    window.lastAclList = _0x14d90b;
    return _0x14d90b;
  } catch (_0x3796ca) {
    return [];
  }
}
/**
 * Lấy danh sách các chính sách ACL và hiển thị chúng dưới dạng các thẻ (card)
 * trong container `deviceMappingContainer`. Nếu không có chính sách nào,
 * hiển thị một thông báo phù hợp.
 */
async function renderAclTabInDevice() {
  // Lấy phần tử container nơi các thẻ ACL sẽ được hiển thị
  const containerElement = document.getElementById("deviceMappingContainer");
  
  // Lấy danh sách các chính sách ACL từ hàm fetchAclList()
  const aclList = await fetchAclList();

  // Nếu danh sách rỗng, hiển thị thông báo và dừng lại
  if (!aclList.length) {
    containerElement.innerHTML = "<div class=\"text-gray-500\">Chưa có chính sách nào.</div>";
    return;
  }

  // Duyệt qua danh sách ACL và tạo chuỗi HTML cho mỗi thẻ
  const aclCardsHtml = aclList.map((acl, index) => `
    <div class="device-card border rounded-lg shadow p-3 text-sm bg-white dark:bg-gray-800 relative">
      <!-- Switch bật/tắt -->
      <label class="switch-toggle" title="${acl.enabled ? "Nhấn để tắt" : "Nhấn để bật"}">
        <input type="checkbox" ${acl.enabled ? "checked" : ''} onchange="toggleAclEnable('${acl.id}', this.checked)">
        <span class="switch-slider"></span>
      </label>
      
      <!-- Các nút hành động: Chỉnh sửa và Xóa -->
      <button class="absolute top-2 right-12 text-xs bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded z-10"
        onclick="editAcl('${acl.id}')">✏️</button>
      <button class="absolute top-2 right-2 text-xs bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded z-10"
        onclick="deleteAcl('${acl.id}')">🗑️</button>
        
      <!-- Nội dung chính của thẻ -->
      <div class="font-semibold leading-tight space-y-0.5 mb-2" style="padding-left: 40px;">
        🛡️#${index + 1}: <span>${acl.remarks || "Chính sách không tên"}</span>
      </div>
      <div class="font-semibold leading-tight space-y-0.5 mb-2" style="padding-left: 40px;">
        🛡️#${index + 1}: <span>${acl.interface || "Chính sách không tên"}</span>
      </div>
      <div>
        <span class="text-gray-700 dark:text-gray-300">Trạng thái:</span>
        <b style="color:${acl.enabled ? "green" : "gray"}">${acl.enabled ? "Bật" : "Tắt"}</b>
      </div>
      <div>
        <span class="text-gray-700 dark:text-gray-300">Nguồn áp dụng:</span>
        <b>${(acl.sources || []).join("<br>")}</b>
      </div>
      <div>
        <span class="text-gray-700 dark:text-gray-300">Proxy sử dụng:</span>
        <b>${acl.target || '-'}</b>
      </div>
      <div>
        <span class="text-gray-700 dark:text-gray-300">Kiểu routing:</span>
        <b>${acl.routing_type || '-'}</b>
      </div>
    </div>
  `).join(''); // Nối tất cả các chuỗi HTML của thẻ lại thành một chuỗi duy nhất

  // Đặt chuỗi HTML đã tạo vào làm nội dung của container
  containerElement.innerHTML = aclCardsHtml;
}


async function toggleAclEnable(_0x396d24, _0x363b4) {
  const _0x348c60 = (await fetchAclList()).find(_0x53d6e1 => _0x53d6e1.id === _0x396d24);
  if (!_0x348c60) {
    return;
  }
  _0x348c60.enabled = _0x363b4;
  await fetch("/lua-api/acl_api.lua?action=edit", {
    'method': 'POST',
    'body': JSON.stringify(_0x348c60),
    'headers': {
      'Content-Type': "application/json"
    }
  });
  renderAclTabInDevice();
}
function toggleIp(_0x21d44a, _0x2eff56) {
  let _0x388805 = document.getElementById("ip-" + _0x21d44a);
  if (!_0x388805) {
    const _0x254213 = document.querySelector(".proxy-checkbox[data-alias=\"" + _0x2eff56 + "\"]");
    _0x388805 = _0x254213?.["closest"](".device-card")?.["querySelector"]("[id^=\"ip-\"]");
  }
  if (_0x388805) {
    _0x388805.classList.toggle("blur-sm");
    ipHiddenState[_0x2eff56] = _0x388805.classList.contains("blur-sm");
    localStorage.setItem("ipHiddenState", JSON.stringify(ipHiddenState));
  }
}
function toggleIpSelected() {
  const _0x42fac2 = document.querySelectorAll(".proxy-checkbox:checked");
  if (_0x42fac2.length === 0x0) {
    return;
  }
  ipToggleState = !ipToggleState;
  _0x42fac2.forEach(_0x5e56da => {
    const _0x40a16f = _0x5e56da.dataset.alias;
    const _0x21425d = _0x5e56da.dataset.index;
    let _0x19371f = document.getElementById("ip-" + _0x21425d);
    if (!_0x19371f) {
      _0x19371f = _0x5e56da.closest('.device-card')?.['querySelector']("[id^=\"ip-\"]");
    }
    if (_0x19371f) {
      if (ipToggleState) {
        _0x19371f.classList.add("blur-sm");
      } else {
        _0x19371f.classList.remove("blur-sm");
      }
      ipHiddenState[_0x40a16f] = ipToggleState;
    }
  });
}
function filterProxies() {
  const _0x5ce6a5 = document.getElementById('proxy-search').value.trim().toLowerCase();
  const _0xb143fa = document.getElementById("proxy-type-filter").value;
  const _0x18645d = document.getElementById('proxy-status-filter').value;
  let _0x27ea63 = 0x0;
  let _0x3be928 = 0x0;
  document.querySelectorAll("#proxy-list .device-card").forEach(_0x6a7a8 => {
    _0x3be928++;
    const _0x4ae2ed = _0x6a7a8.querySelector('.proxy-alias')?.['textContent']?.['toLowerCase']() || '';
    const _0x13d6d6 = _0x6a7a8.querySelector(".proxy-ip")?.["textContent"]?.["toLowerCase"]() || '';
    const _0x3c24cc = _0x6a7a8.querySelector('.proxy-port')?.["textContent"]?.["toLowerCase"]() || '';
    const _0x4913e0 = _0x6a7a8.querySelector(".proxy-protocol")?.["textContent"]?.['toLowerCase']() || '';
    const _0x3bf900 = _0x6a7a8.querySelector(".proxy-status .status-text")?.["textContent"]?.["toLowerCase"]() || '';
    const _0x364479 = !_0x5ce6a5 || _0x4ae2ed.includes(_0x5ce6a5) || _0x13d6d6.includes(_0x5ce6a5) || _0x3c24cc.includes(_0x5ce6a5) || _0x4913e0.includes(_0x5ce6a5);
    const _0x2a29bb = !_0xb143fa || _0x4913e0 === _0xb143fa;
    const _0x35cf9e = !_0x18645d || _0x3bf900 === _0x18645d;
    if (_0x364479 && _0x2a29bb && _0x35cf9e) {
      _0x6a7a8.style.display = "block";
      _0x27ea63++;
    } else {
      _0x6a7a8.style.display = "none";
    }
  });
  document.getElementById("proxy-count").textContent = "Hiển thị " + _0x27ea63 + '/' + _0x3be928 + " proxy";
  let _0x3f64fa = document.getElementById('proxy-empty');
  if (_0x3f64fa) {
    _0x3f64fa.remove();
  }
  const _0x543a5d = window.lastProxyList || [];
  if (_0x27ea63 === 0x0 && _0x543a5d.length > 0x0) {
    _0x3f64fa = document.createElement("div");
    _0x3f64fa.id = 'proxy-empty';
    _0x3f64fa.className = "text-center text-gray-500 py-4";
    _0x3f64fa.innerText = "Không tìm thấy proxy nào…";
    document.getElementById("proxy-list").appendChild(_0x3f64fa);
  }
}
function filterProxyList() {
  const _0x78c9aa = document.getElementById("proxyFilter").value.trim();
  document.getElementById("clearFilterBtn").style.display = _0x78c9aa ? '' : 'none';
}
function clearProxyFilter() {
  document.getElementById("proxyFilter").value = '';
  filterProxyList();
}
function highlight(_0x1c0f5b, _0x117447) {
  if (!_0x117447) {
    return _0x1c0f5b;
  }
  const _0x33f93c = _0x117447.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return _0x1c0f5b.replace(new RegExp(_0x33f93c, 'gi'), _0xf9bd43 => '<mark>' + _0xf9bd43 + "</mark>");
}
async function deleteSelectedProxies() {
  const _0x11e77f = document.querySelectorAll('.proxy-checkbox:checked');
  if (!_0x11e77f.length) {
    return;
  }
  const _0x38af95 = await showConfirm("Bạn có chắc chắn muốn xóa " + _0x11e77f.length + " proxy?");
  if (!_0x38af95) {
    return;
  }
  let _0x200a0f = Array.from(_0x11e77f).map(_0x5ae178 => _0x5ae178.dataset.alias);
  let _0x6bc59a = _0x200a0f.map(_0x1c2920 => fetch('/cgi-bin/delete-proxy.sh?alias=' + encodeURIComponent(_0x1c2920)).then(_0xf23597 => _0xf23597.json().then(_0x1fd02f => ({
    'alias': _0x1c2920,
    ..._0x1fd02f
  }))));
  Promise.all(_0x6bc59a).then(_0x2986a3 => {
    let _0x4f862b = _0x2986a3.filter(_0x5ee442 => _0x5ee442.status === 'ok').length;
    let _0x302d45 = _0x2986a3.filter(_0xd38573 => _0xd38573.status !== 'ok').map(_0x3c94fb => _0x3c94fb.alias + ": " + (_0x3c94fb.message || _0x3c94fb.error || "Lỗi không xác định"));
    showToast("Đã xóa thành công " + _0x4f862b + " proxy.\n" + (_0x302d45.length ? "Lỗi:\n" + _0x302d45.join("\n") : ''));
    addLog("🧹 Đã xoá " + _0x4f862b + " proxy");
    fetch("/cgi-bin/restart-passwall2.sh");
    loadStatus();
  })["catch"](_0x1202fc => {
    showToast("Lỗi hệ thống: " + _0x1202fc);
    addLog("❌ Lỗi hệ thống khi xóa proxy: " + (_0x1202fc.message || _0x1202fc));
  });
}
let allSelected = false;
let ipToggleState = false;
let selectedAliases = [];
let ipHiddenState = {};
try {
  const saved = localStorage.getItem("ipHiddenState");
  if (saved) {
    ipHiddenState = JSON.parse(saved);
  }
} catch (a0_0x222683) {}
function toggleSelectAll() {
  allSelected = !allSelected;
  const _0x43d111 = document.querySelectorAll(".proxy-checkbox");
  _0x43d111.forEach(_0x5c53d4 => _0x5c53d4.checked = allSelected);
  selectedAliases = allSelected ? Array.from(_0x43d111).map(_0x46a009 => _0x46a009.dataset.alias) : [];
  updateActionButtonsVisibility();
  const _0x591179 = document.getElementById("select-all-btn");
  if (_0x591179) {
    _0x591179.textContent = allSelected ? '🚫' : '✅';
    _0x591179.title = allSelected ? "Hủy chọn tất cả proxy" : "Chọn tất cả proxy";
  }
}
function updateActionButtonsVisibility() {
  const _0x4e69c5 = document.querySelectorAll(".proxy-checkbox:checked");
  const _0x4046c1 = document.getElementById('toggle-ip-btn');
  const _0x412edd = document.getElementById("delete-btn");
  if (_0x4046c1) {
    _0x4046c1.style.display = _0x4e69c5.length ? "inline-block" : "none";
  }
  if (_0x412edd) {
    _0x412edd.style.display = _0x4e69c5.length ? "inline-block" : "none";
  }
}
function updateActionButtons() {
  const _0x103524 = document.querySelectorAll(".proxy-checkbox:checked").length;
  document.getElementById("toggle-ip-btn").style.display = _0x103524 ? "inline-block" : 'none';
  document.getElementById("delete-btn").style.display = _0x103524 ? "inline-block" : 'none';
}
document.addEventListener('DOMContentLoaded', async () => {
  const _0x35abfa = localStorage.getItem('lastTab') || "dashboard";
  showTab(_0x35abfa);
  document.body.classList.remove("invisible");
  document.body.addEventListener('change', _0x56e490 => {
    if (_0x56e490.target.classList.contains("proxy-checkbox")) {
      updateActionButtonsVisibility();
    }
  });
});
function copyToClipboard(_0x8a0ce5) {
  if (!navigator.clipboard) {
    const _0x2961e2 = document.createElement("textarea");
    _0x2961e2.value = _0x8a0ce5;
    _0x2961e2.style.position = 'fixed';
    document.body.appendChild(_0x2961e2);
    _0x2961e2.focus();
    _0x2961e2.select();
    try {
      document.execCommand("copy");
      showToast("Đã copy IP: " + _0x8a0ce5);
    } catch (_0x1922e3) {
      showToast("Không thể copy IP này!");
    }
    document.body.removeChild(_0x2961e2);
  } else {
    navigator.clipboard.writeText(_0x8a0ce5).then(() => {
      showToast("Đã copy IP: " + _0x8a0ce5);
    }, () => {
      showToast("Không thể copy IP này!");
    });
  }
}
function toggleNetmaskInput(_0x14deb7) {
  const _0x2f7e0b = document.getElementById("netmask-custom");
  if (_0x14deb7.value === "custom") {
    _0x2f7e0b.style.display = "block";
    _0x2f7e0b.focus();
  } else {
    _0x2f7e0b.style.display = "none";
    _0x2f7e0b.value = '';
  }
}
let currentBand = "2.4GHz";
let currentWifiInfo = null;
function generateRandomMAC() {
  let _0xa29579 = [0x2];
  for (let _0x432a3f = 0x1; _0x432a3f < 0x6; _0x432a3f++) {
    _0xa29579.push(Math.floor(Math.random() * 0x100));
  }
  return _0xa29579.map(_0x73878 => _0x73878.toString(0x10).padStart(0x2, '0')).join(':');
}
function onEncryptionChange() {
  const _0x385adf = document.getElementById("wifiEncryption").value;
  document.getElementById("wifiPasswordGroup").style.display = _0x385adf === 'none' || _0x385adf === 'owe' ? "none" : "block";
}


function closeWifiModal() {
  const _0x577345 = document.getElementById("wifiModal");
  const _0x2bcabf = document.getElementById("add-wifi-form");
  _0x577345.style.display = 'none';
  _0x2bcabf.reset();
  delete _0x2bcabf.dataset.editingSSID;
  const _0x3c14b7 = _0x2bcabf.querySelector("button[type=submit]");
  if (_0x3c14b7) {
    _0x3c14b7.innerText = "Tạo WiFi";
  }
}
async function loadWifiInfo(_0x24c43c) {
  const _0x569f5c = await fetch('/lua-api/wifi_info.lua?band=' + encodeURIComponent(_0x24c43c));
  const _0x105822 = await _0x569f5c.json();
  currentWifiInfo = _0x105822;
  const _0x54149e = (_0x105822.bands || []).find(_0x4ea346 => _0x4ea346.band === _0x24c43c);
  if (!_0x54149e) {
    console.error("Không tìm thấy thông tin band cho:", _0x24c43c);
    return;
  }
  const _0x43a0bb = document.getElementById("wifiChannelSelect");
  if (!_0x43a0bb) {
    console.error("Không tìm thấy phần tử #wifiChannelSelect");
    return;
  }
  _0x43a0bb.innerHTML = "<option value=\"auto\">Auto</option>";
  if (Array.isArray(_0x54149e.channels)) {
    _0x54149e.channels.forEach(_0x1255c8 => {
      const _0x2c92fb = document.createElement("option");
      _0x2c92fb.value = _0x1255c8.channel;
      _0x2c92fb.textContent = _0x1255c8.channel + " (" + _0x1255c8.freq + " MHz)";
      _0x43a0bb.appendChild(_0x2c92fb);
    });
  }
  const _0x367d5c = document.getElementById("wifiOpMode");
  _0x367d5c.innerHTML = '';
  (_0x54149e.modes || []).forEach(_0x3726d4 => {
    _0x367d5c.innerHTML += "<option value=\"" + _0x3726d4 + "\">" + _0x3726d4.toUpperCase() + "</option>";
  });
  _0x367d5c.onchange = () => renderWidths(_0x54149e.widths, _0x367d5c.value);
  renderWidths(_0x54149e.widths, _0x367d5c.value || _0x54149e.modes && _0x54149e.modes[0x0]);
}


function renderWidths(_0x5799e4, _0x51c47b) {
  const _0x394992 = document.getElementById("wifiWidth");
  _0x394992.innerHTML = '';
  const _0xeafd5b = _0x5799e4[_0x51c47b] || [];
  _0xeafd5b.forEach(_0x474c30 => {
    _0x394992.innerHTML += "<option value=\"" + _0x474c30 + "\">" + _0x474c30 + " MHz</option>";
  });
  if (_0xeafd5b.length > 0x0) {
    _0x394992.value = _0xeafd5b[_0xeafd5b.length - 0x1];
  }
}


function autoSetMaxWidth() {
  const _0x3ae963 = document.querySelector("input[name=\"band\"]:checked").value;
  const _0x1aee97 = document.getElementById("wifiOpMode").value;
  const _0x38c6d0 = document.getElementById("wifiWidth");
  let _0x453a9c = '20';
  let _0x243968 = false;
  if (_0x1aee97 === 'ax') {
    if (_0x3ae963 === "5GHz") {
      _0x453a9c = "160";
      _0x243968 = true;
    } else {
      _0x453a9c = '40';
      _0x243968 = true;
    }
  } else {
    if (_0x1aee97 === 'ac') {
      if (_0x3ae963 === "5GHz") {
        _0x453a9c = '80';
        _0x243968 = true;
      } else {
        _0x453a9c = '40';
        _0x243968 = true;
      }
    } else if (_0x1aee97 === 'n') {
      _0x453a9c = '40';
      _0x243968 = true;
    } else {
      _0x243968 = false;
    }
  }
  _0x38c6d0.value = _0x453a9c;
}



let selectedDeviceIds = [];
function updateDeviceActionButtons() {
  const _0x31ba1d = document.querySelectorAll("#deviceMappingContainer .device-checkbox");
  selectedDeviceIds = Array.from(_0x31ba1d).filter(_0x316560 => _0x316560.checked).map(_0x3569e5 => ({
    'type': _0x3569e5.dataset.type,
    'id': _0x3569e5.dataset.id
  }));
  const _0x2106db = document.querySelector("button[onclick=\"deleteSelectedDevices()\"]");
  if (_0x2106db) {
    _0x2106db.style.display = selectedDeviceIds.length > 0x0 ? '' : "none";
  }
}
function toggleSelectAllDevices() {
  const _0x2065f9 = document.querySelectorAll("#deviceMappingContainer .device-checkbox");
  const _0x28b21e = Array.from(_0x2065f9).every(_0x4d3fcf => _0x4d3fcf.checked);
  _0x2065f9.forEach(_0x366d08 => _0x366d08.checked = !_0x28b21e);
  updateDeviceActionButtons();
}
async function deleteSelectedDevices() {
  if (!selectedDeviceIds.length) {
    return showToast("Chưa chọn thiết bị nào!");
  }
  if (!(await showConfirm("Bạn chắc chắn muốn xoá " + selectedDeviceIds.length + " thiết bị đã chọn?"))) {
    return;
  }
  for (const _0xd400d3 of selectedDeviceIds) {
    await deleteSingle(_0xd400d3.type, _0xd400d3.id);
  }
  loadDeviceMapping();
}
async function toggleWifiEnable(_0x54c461, _0x296337) {
  const _0x5262ad = await fetch("/lua-api/wifi_toggle.lua", {
    'method': 'POST',
    'headers': {
      'Content-Type': 'application/json'
    },
    'body': JSON.stringify({
      'ssid': _0x54c461,
      'enabled': _0x296337
    })
  });
  const _0x3bfb66 = await _0x5262ad.json();
  if (_0x3bfb66.success) {
    showToast("Đã " + (_0x3bfb66.enabled ? "bật" : 'tắt') + " WiFi " + _0x54c461, "success");
  } else {
    showToast("Lỗi: " + (_0x3bfb66.error || "Không rõ nguyên nhân"), "error");
  }
}


async function openACLModal(isEditing = false, aclData = null) {
  const modalElement = document.getElementById("aclModal");
  modalElement.style.display = "flex";
  
  const aclForm = document.getElementById('acl-form');
  if (!isEditing) {
    aclForm.reset();
  }
  aclForm.removeAttribute("data-editing-id");
  
  const sourcesWrapper = document.getElementById('acl-sources-wrapper');
  sourcesWrapper.innerHTML = '';
  window.lastNodeList = null;

  
  
  
  await loadNodes(aclData?.target);
  loadSourceSuggestions();
  
  if (isEditing && aclData) {
    aclForm.dataset.editingId = aclData.id;
    document.getElementById("acl-enable").checked = aclData.enabled ?? true;
    document.getElementById("acl-remarks").value = aclData.remarks || '';
    document.getElementById("acl-interface").value = aclData.interface || '';
    
    
    // Set target node
    const nodeSelect = document.getElementById("acl-node");
    if (nodeSelect && aclData.target) {
      if (![...nodeSelect.options].some(option => option.value == aclData.target)) {
        const newOption = document.createElement("option");
        newOption.value = aclData.target;
        newOption.textContent = aclData.target;
        nodeSelect.appendChild(newOption);
      }
      nodeSelect.value = aclData.target;
    }
    
    // Set action
    const actionSelect = document.getElementById("acl-action");
    if (actionSelect && aclData.action) {
      if (![...actionSelect.options].some(option => option.value == aclData.action)) {
        const newOption = document.createElement("option");
        newOption.value = aclData.action;
        newOption.textContent = aclData.action;
        actionSelect.appendChild(newOption);
      }
      actionSelect.value = aclData.action;
    }
    
    // Set checkboxes
    document.getElementById("acl-write-ipset-direct").checked = !!aclData.write_ipset_direct;
    document.getElementById("acl-fakedns-enable").checked = !!aclData.remote_fakedns;
    
    // Set port configurations
    document.getElementById("acl-tcp-no-redir").value = aclData.tcp_no_redir_ports || "default";
    document.getElementById("acl-udp-no-redir").value = aclData.udp_no_redir_ports || "default";
    document.getElementById("acl-tcp-redir").value = aclData.tcp_redir_ports || "default";
    document.getElementById('acl-udp-redir').value = aclData.udp_redir_ports || "default";
    
    // Set DNS configurations
    document.getElementById('acl-remote-dns-protocol').value = aclData.remote_dns_protocol || "tcp";
    document.getElementById("acl-remote-dns").value = aclData.remote_dns || '1.1.1.1';
    document.getElementById("acl-remote-dns-doh").value = aclData.remote_dns_doh || '';
    document.getElementById('acl-remote-dns-detour').value = aclData.remote_dns_detour || "remote";
    document.getElementById("acl-remote-dns-query-strategy").value = aclData.remote_dns_query_strategy || "UseIPv4";
    document.getElementById("acl-dns-hosts").value = aclData.dns_hosts || '';
    
    // Add source items
    if (Array.isArray(aclData.sources) && aclData.sources.length > 0) {
      aclData.sources.forEach(source => {
        addSourceItem(source);
      });
    } else {
      addSourceItem();
    }
  }
  
  onACLNodeChange();
  onACLProtocolChange();
  
  // Handle form submission
  aclForm.onsubmit = async function(event) {
    event.preventDefault();
    const form = this;
    
    // Collect form data
    const formData = {
      'remarks': document.getElementById("acl-remarks")?.value?.trim(),
      'interface': document.getElementById("acl-interface")?.value?.trim(),
      'sources': Array.from(document.querySelectorAll('.source-item'))
        .map(item => item.value.trim())
        .filter(Boolean),
      'target': document.getElementById("acl-node")?.value?.trim(),
      'action': document.getElementById("acl-action")?.value?.trim(),
      'enabled': document.getElementById("acl-enable")?.checked,
      'remote_fakedns': document.getElementById("acl-fakedns-enable")?.checked,
      'write_ipset_direct': document.getElementById("acl-write-ipset-direct")?.checked,
      'remote_dns_protocol': document.getElementById("acl-remote-dns-protocol")?.value,
      'remote_dns_doh': document.getElementById("acl-remote-dns-doh")?.value,
      'remote_dns': document.getElementById('acl-remote-dns')?.value,
      'remote_dns_detour': document.getElementById('acl-remote-dns-detour')?.value,
      'remote_dns_query_strategy': document.getElementById("acl-remote-dns-query-strategy")?.value,
      'dns_hosts': document.getElementById("acl-dns-hosts")?.value,
      'tcp_no_redir_ports': document.getElementById("acl-tcp-no-redir").value || "default",
      'udp_no_redir_ports': document.getElementById("acl-udp-no-redir").value || "default",
      'tcp_redir_ports': document.getElementById("acl-tcp-redir").value || "default",
      'udp_redir_ports': document.getElementById("acl-udp-redir").value || "default"
    };
    
    console.log("ACL data being sent:", formData);
    
    if (form.dataset.editingId) {
      formData.id = form.dataset.editingId;
    }
    
    window.lastAclList = null;
    const action = form.dataset.editingId ? "edit" : "add";
    
    // Send data to server
    const response = await fetch("/lua-api/acl_api.lua?action=" + action, {
      'method': "POST",
      'headers': {
        'Content-Type': "application/json"
      },
      'body': JSON.stringify(formData)
    });
    
    const result = await response.json();
    if (result.success) {
      showToast("✅ ACL saved successfully!");
      closeACLModal();
      window.lastAclList = null;
      renderAclTabInDevice();
    } else {
      showToast("❌ Error saving ACL: " + (result.msg || "Unknown error"));
    }
  };
}


/**
 * Lấy danh sách ACL từ cache hoặc fetch từ server nếu chưa có.
 * @returns {Promise<Array>} Danh sách các ACL.
 */
async function getAclList() {
  // Sử dụng cache để tránh gọi API không cần thiết
  if (!window.lastAclList) {
    window.lastAclList = await fetchAclList();
  }
  return window.lastAclList;
}

/**
 * Mở modal để chỉnh sửa một ACL cụ thể.
 * @param {string | number} id - ID của ACL cần chỉnh sửa.
 */
async function editAcl(id) {
  const aclList = await getAclList();
  const aclEntry = aclList.find(acl => acl.id === id);

  if (!aclEntry) {
    showToast("Không tìm thấy ACL!", "error");
    return;
  }

  // Mở modal ở chế độ chỉnh sửa với dữ liệu của ACL đã chọn
  openACLModal(true, aclEntry);
}

/**
 * Xóa một ACL dựa trên ID.
 * @param {string | number} id - ID của ACL cần xóa.
 */
async function deleteAcl(id) {
  try {
    const response = await fetch('/lua-api/acl_api.lua?action=delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: id }),
    });

    const result = await response.json();

    if (result.status === 'ok') {
      showToast("✅ Đã xóa ACL!", "success");
      // Xóa cache để lần tải tiếp theo sẽ lấy dữ liệu mới nhất
      window.lastAclList = null;
      // Cập nhật lại giao diện
      renderAclTabInDevice();
    } else {
      showToast(`❌ Xóa thất bại: ${result.msg || "Không rõ"}`, "error");
    }
  } catch (error) {
    showToast(`❌ Lỗi hệ thống: ${error.message}`, "error");
  }
}

// Gán hàm deleteAcl vào đối tượng window để có thể gọi từ HTML (ví dụ: onclick)
window.deleteAcl = deleteAcl;

/**
 * Đóng modal chỉnh sửa/thêm ACL.
 */
function closeACLModal() {
  const modal = document.getElementById("aclModal");
  if (modal) {
    modal.style.display = 'none';
  }
}


/**
 * Xử lý sự kiện khi người dùng thay đổi giá trị trong dropdown "Node ACL".
 * Hiển thị hoặc ẩn các tùy chọn cấu hình DNS tùy chỉnh dựa trên lựa chọn.
 */
function onACLNodeChange() {
  const selectedNodeValue = document.getElementById("acl-node").value;

  if (selectedNodeValue === "default") {
    // Nếu chọn "default", ẩn tất cả các tùy chọn DNS nâng cao
    document.getElementById("acl-remote-dns-proto-wrap").style.display = "none";
    document.getElementById("acl-remote-dns-wrap").style.display = "none";
    document.getElementById('acl-remote-dns-doh-wrap').style.display = "none";
    document.getElementById("acl-remote-dns-detour-wrap").style.display = "none";
    document.getElementById('acl-fakedns-wrap').style.display = "none";
    document.getElementById('acl-remote-dns-query-strategy-wrap').style.display = "none";
  } else {
    // Nếu chọn một node cụ thể, hiển thị tùy chọn giao thức DNS
    document.getElementById("acl-remote-dns-proto-wrap").style.display = '';
    // Cập nhật lại giao diện các tùy chọn khác dựa trên giao thức hiện tại
    onACLProtocolChange();
  }
}

/**
 * Xử lý sự kiện khi người dùng thay đổi giao thức DNS từ xa.
 * Hiển thị hoặc ẩn các trường cấu hình tương ứng với giao thức đã chọn.
 */
function onACLProtocolChange() {
  const selectedProtocol = document.getElementById("acl-remote-dns-protocol").value;

  // Hiển thị/ẩn trường DNS server (cho TCP/UDP)
  const shouldShowDnsServer = selectedProtocol === 'tcp' || selectedProtocol === "udp";
  document.getElementById('acl-remote-dns-wrap').style.display = shouldShowDnsServer ? '' : "none";

  // Hiển thị/ẩn trường DNS-over-HTTPS (DoH)
  const shouldShowDoh = selectedProtocol === "doh";
  document.getElementById('acl-remote-dns-doh-wrap').style.display = shouldShowDoh ? '' : "none";

  // Các tùy chọn này chỉ hiện khi có DNS từ xa (TCP, UDP, hoặc DoH)
  const isRemoteDnsEnabled = shouldShowDnsServer || shouldShowDoh;
  const displayStyle = isRemoteDnsEnabled ? '' : "none";

  document.getElementById("acl-remote-dns-detour-wrap").style.display = displayStyle;
  document.getElementById("acl-fakedns-wrap").style.display = displayStyle;
  document.getElementById('acl-remote-dns-query-strategy-wrap').style.display = displayStyle;
}

// Gán các hàm xử lý sự kiện cho các phần tử HTML tương ứng
document.getElementById('acl-node').onchange = onACLNodeChange;
document.getElementById("acl-remote-dns-protocol").onchange = onACLProtocolChange;

/**
 * Lấy danh sách các giá trị từ các ô input nguồn (sources) đã được nhập.
 * @returns {string[]} Mảng chứa các giá trị nguồn không rỗng và đã được cắt khoảng trắng.
 */
function getSources() {
  return Array.from(document.querySelectorAll(".source-item"))
    .map(element => element.value.trim())
    .filter(value => value.length > 0);
}
function getInterface() {
  return Array.from(document.querySelectorAll(".interface-item"))
    .map(element => element.value.trim())
    .filter(value => value.length > 0);
}

/**
 * Thêm một ô input mới để người dùng nhập nguồn (source).
 * @param {string} [initialValue=''] - Giá trị ban đầu cho ô input (mặc định là rỗng).
 */
function addSourceItem(initialValue = '') {
  const sourcesWrapper = document.getElementById("acl-sources-wrapper");
  
  // Tạo container cho item mới
  const itemContainer = document.createElement('div');
  itemContainer.className = "item flex gap-2 mb-1";

  // Tạo ô input để nhập giá trị
  const inputElement = document.createElement('input');
  inputElement.type = "text";
  inputElement.className = "input source-item interface-item flex-grow";
  inputElement.placeholder = "Nhập IP, MAC, CIDR, ipset...";
  inputElement.value = initialValue;
  inputElement.setAttribute("list", 'sources-list'); // Liên kết với datalist

  // Tạo nút xóa
  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.className = "remove-btn px-2 rounded bg-red-500 text-white hover:bg-red-600";
  removeButton.innerText = '×';
  removeButton.onclick = () => itemContainer.remove(); // Gán sự kiện xóa item

  // Ghép các phần tử và thêm vào wrapper
  itemContainer.appendChild(inputElement);
  itemContainer.appendChild(removeButton);
  sourcesWrapper.appendChild(itemContainer);
}

// Gán sự kiện cho nút "Thêm nguồn"
document.getElementById('add-source-btn').onclick = () => addSourceItem();



async function loadNodes(_0x490f67 = null) {
  window.lastNodeList = null;
  const _0x36bed5 = await fetch("/lua-api/nodes.lua");
  const _0x81cf71 = await _0x36bed5.json();
  const _0x85b68a = document.getElementById("acl-node");
  _0x85b68a.innerHTML = "<option value=\"default\">Chọn proxy</option>";
  _0x81cf71.nodes.forEach(_0x37825a => {
    let _0x4e1f64 = _0x37825a.used && (!_0x490f67 || _0x37825a.id !== _0x490f67) ? " [đang sử dụng]" : '';
    const _0x4bfd4f = document.createElement('option');
    _0x4bfd4f.value = _0x37825a.id;
    _0x4bfd4f.textContent = '' + _0x37825a.remark + _0x4e1f64;
    _0x85b68a.appendChild(_0x4bfd4f);
  });
}
/**
 * Tải các gợi ý nguồn (sources) từ máy chủ và điền vào một <datalist>.
 * Datalist này cung cấp các tùy chọn tự động hoàn thành cho các ô nhập liệu nguồn.
 */
async function loadSourceSuggestions() {
  try {
    // 1. Lấy dữ liệu các nguồn từ API
    const response = await fetch("/lua-api/sources.lua");
    const data = await response.json();

    // 2. Tìm và xóa datalist cũ nếu nó tồn tại để tránh trùng lặp
    let datalistElement = document.getElementById("sources-list");
    if (datalistElement) {
      datalistElement.remove();
    }

    // 3. Tạo một phần tử <datalist> mới và đặt ID cho nó
    datalistElement = document.createElement("datalist");
    datalistElement.id = "sources-list";

    // 4. Sử dụng một Set để đảm bảo các giá trị IP là duy nhất và không bị lặp lại
    const uniqueValues = new Set();

    // 5. Kiểm tra xem dữ liệu trả về có phải là một mảng không
    if (Array.isArray(data.sources)) {
      data.sources.forEach(source => {
        // Với mỗi nguồn, tách chuỗi IP ra bởi dấu phẩy, sau đó loại bỏ khoảng trắng thừa
        source.ip.split(',').map(ip => ip.trim()).forEach(trimmedIp => {
          // Nếu IP hợp lệ và chưa được thêm vào Set
          if (trimmedIp && !uniqueValues.has(trimmedIp)) {
            uniqueValues.add(trimmedIp); // Thêm vào Set để đánh dấu là đã thấy
            
            // Tạo một phần tử <option> mới cho datalist
            const optionElement = document.createElement('option');
            optionElement.value = trimmedIp; // Giá trị sẽ được điền vào ô input
            optionElement.label = source.label; // Nhãn hiển thị trong danh sách gợi ý
            
            datalistElement.appendChild(optionElement);
          }
        });
      });
    }

    // 6. Thêm datalist đã được điền đầy đủ vào cuối thẻ <body>
    document.body.appendChild(datalistElement);

  } catch (error) {
    // Ghi lỗi ra console nếu có sự cố xảy ra trong quá trình
    console.error("Lỗi khi tải các gợi ý nguồn:", error);
  }
}


/**
 * Xóa một mục nguồn (source item) khỏi danh sách.
 * Nếu chỉ còn một mục, hàm này sẽ xóa nội dung của nó thay vì xóa hoàn toàn
 * để người dùng luôn có ít nhất một ô input để nhập liệu.
 * @param {HTMLElement} removeButton - Nút "xóa" (×) được nhấn.
 */
function removeSourceItem(removeButton) {
  const sourcesWrapper = document.getElementById("acl-sources-wrapper");
  const sourceItems = sourcesWrapper.children;

  // Nếu có nhiều hơn một mục, hãy xóa mục chứa nút được nhấn.
  if (sourceItems.length > 1) {
    removeButton.parentElement.remove();
  } else {
    // Nếu đây là mục cuối cùng, chỉ cần xóa nội dung của ô input
    // để người dùng vẫn có thể nhập giá trị mới.
    const inputElement = removeButton.parentElement.querySelector("input");
    inputElement.value = '';
  }
}




function setupPortCustomInputs() {
  const _0x3e13de = [{
    'main': "acl-tcp-no-redir",
    'custom': "acl-tcp-no-redir-custom"
  }, {
    'main': "acl-udp-no-redir",
    'custom': "acl-udp-no-redir-custom"
  }, {
    'main': "acl-tcp-redir",
    'custom': "acl-tcp-redir-custom"
  }, {
    'main': 'acl-udp-redir',
    'custom': "acl-udp-redir-custom"
  }];
  _0x3e13de.forEach(_0x4d5aee => {
    const _0x359477 = document.getElementById(_0x4d5aee.main);
    const _0x11917f = document.getElementById(_0x4d5aee.custom);
    if (!_0x359477 || !_0x11917f) {
      return;
    }
    _0x359477.addEventListener("change", function () {
      if (this.value === 'custom') {
        _0x11917f.style.display = '';
        _0x11917f.disabled = false;
      } else {
        _0x11917f.style.display = "none";
        _0x11917f.disabled = true;
        _0x11917f.value = '';
      }
    });
    if (_0x359477.value !== "custom") {
      _0x11917f.style.display = "none";
      _0x11917f.disabled = true;
      _0x11917f.value = '';
    } else {
      _0x11917f.style.display = '';
      _0x11917f.disabled = false;
    }
  });
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupPortCustomInputs);
} else {
  setupPortCustomInputs();
}
async function saveACL(_0x57c626) {
  try {
    const _0x4fe9cc = await fetch('/lua-api/save_acl.lua', {
      'method': "POST",
      'headers': {
        'Content-Type': "application/json"
      },
      'body': JSON.stringify(_0x57c626)
    });
    const _0x3b9d0b = await _0x4fe9cc.json();
    if (_0x3b9d0b.status === 'ok') {
      showToast("Đã lưu ACL thành công!");
      addLog("Lưu ACL: " + _0x57c626.remarks);
    } else {
      showToast("Lưu ACL lỗi: " + (_0x3b9d0b.msg || "Không rõ"));
      addLog("Lỗi lưu ACL: " + (_0x3b9d0b.msg || "Không rõ"));
    }
  } catch (_0x56b1bc) {
    showToast("Kết nối backend lỗi!");
    addLog("Lỗi kết nối API khi lưu ACL: " + _0x56b1bc);
  }
}
/**
 * Khởi tạo các sự kiện liên quan đến danh sách nguồn ACL sau khi DOM đã tải xong.
 */
document.addEventListener("DOMContentLoaded", () => {
  // Lấy phần tử wrapper chứa tất cả các ô input nguồn.
  const sourcesWrapper = document.getElementById("acl-sources-wrapper");

  // Lắng nghe sự kiện nhấn phím trên toàn bộ vùng wrapper.
  // Sử dụng "event delegation" để sự kiện hoạt động cho cả các ô input được thêm vào sau này.
  sourcesWrapper.addEventListener("keydown", function (event) {
    // Nếu phím được nhấn là 'Enter'
    if (event.key === 'Enter') {
      // Ngăn chặn hành vi mặc định của phím Enter (ví dụ: gửi biểu mẫu).
      event.preventDefault();

      // Bỏ focus khỏi ô input hiện tại.
      // Điều này tạo ra một phản hồi rõ ràng cho người dùng rằng họ đã hoàn thành việc nhập liệu ở ô này.
      event.target.blur();
    }
  });
});




function switchUI() {
  const _0x49a3d0 = document.getElementById("uiSelector").value;
  addLog("Chuyển giao diện: " + (_0x49a3d0 === "luci" ? 'LuCI' : "sonwrt Manager"));
  showToast("🔄 Đang chuyển sang giao diện <b>" + (_0x49a3d0 === "luci" ? "LuCI" : "sonwrt Manager") + '</b>...');
  setTimeout(() => {
    if (_0x49a3d0 === "luci") {
      window.location.href = "http://" + location.hostname + "/cgi-bin/luci/";
    } else {
      let _0x245166 = window.location.port || '80';
      _0x245166 = _0x245166 === '80' || _0x245166 === '' || _0x245166 === "443" ? '' : ':' + _0x245166;
      window.location.href = "http://" + location.hostname + _0x245166 + '/';
    }
  }, 0x384);
}
async function rebootRouter() {
  addLog("==> ĐÃ BẤM NÚT REBOOT");
  const _0x22b045 = await showConfirm("Bạn có chắc chắn muốn khởi động lại router không?");
  if (!_0x22b045) {
    return;
  }
  showToast("🔄 reboot...");
  addLog("==> Gửi AJAX reboot...");
  try {
    let _0x35af5f = await fetch("/lua-api/reboot.lua", {
      'method': "POST"
    });
    let _0x5d31b3 = {};
    try {
      _0x5d31b3 = await _0x35af5f.json();
    } catch {}
    if (_0x5d31b3 && _0x5d31b3.status === 'ok') {
      addLog("==> ĐÃ GỬI LỆNH REBOOT THÀNH CÔNG");
      showToast("✅ Đã reboot! Vui lòng đợi 60–90 giây rồi truy cập lại router.");
    } else {
      addLog("==> KHÔNG XÁC ĐỊNH, router có thể đã reboot");
      showToast("ℹ️ Đã reboot, vui lòng chờ router lên lại!");
    }
  } catch (_0x4b683a) {
    addLog("==> Lỗi khi gửi lệnh reboot (router có thể đã reboot): " + _0x4b683a);
    showToast("ℹ️ Router đã reboot, vui lòng đợi router lên lại!");
  }
}
function restartService() {
  const _0x277561 = document.getElementById("svcSelector").value;
  let _0x1a815b = _0x277561;
  if (_0x277561 === "passwall2") {
    _0x1a815b = "Proxy";
  }
  addLog("Khởi động lại dịch vụ: " + _0x1a815b);
  if (_0x277561 === "uhttpd" || _0x277561 === "nginx") {
    showToast("🌐 Đang khởi động lại dịch vụ web (<b>" + _0x1a815b + "</b>)! Kết nối có thể bị gián đoạn, vui lòng đợi 10–15 giây rồi tải lại trang.");
  } else {
    showToast("🧹 Đang khởi động lại dịch vụ <b>" + _0x1a815b + "</b>...");
  }
  fetch("/lua-api/restart_service.lua", {
    'method': "POST",
    'headers': {
      'Content-Type': 'application/json'
    },
    'body': JSON.stringify({
      'name': _0x277561
    })
  });
}
async function changeUIPort() {
  const _0x47e33b = document.getElementById("uiPort").value;
  if (!_0x47e33b || isNaN(_0x47e33b) || _0x47e33b < 0x1 || _0x47e33b > 0xffff) {
    showToast("❌ Nhập port hợp lệ!");
    return;
  }
  showToast("⏳ Đang đổi port giao diện web...");
  addLog("Gửi yêu cầu đổi port sang: " + _0x47e33b);
  const _0x408713 = new URLSearchParams();
  _0x408713.append("port", _0x47e33b);
  try {
    let _0x1e614c = await fetch("/lua-api/change_uiport.lua", {
      'method': "POST",
      'headers': {
        'Content-Type': "application/x-www-form-urlencoded"
      },
      'body': _0x408713.toString()
    });
    let _0x115700 = {};
    try {
      _0x115700 = await _0x1e614c.json();
    } catch {}
    if (_0x115700 && _0x115700.status === 'ok') {
      showToast("✅ Đổi port thành công! Vui lòng truy cập lại router qua cổng mới: <b>" + _0x47e33b + "</b>");
      addLog("Đổi port thành công, router sẽ tự khởi động lại dịch vụ web.");
      setTimeout(() => {
        window.location.href = "http://" + location.hostname + ':' + _0x47e33b + '/';
      }, 0x7d0);
    } else {
      showToast("❌ Lỗi đổi port!");
      addLog("Lỗi đổi port giao diện: " + (_0x115700 && _0x115700.msg ? _0x115700.msg : ''));
    }
  } catch (_0x11f21a) {
    showToast("❌ Lỗi kết nối khi đổi port!");
    addLog("Lỗi đổi port giao diện: " + _0x11f21a);
  }
}
async function updateWRTManager() {
  showToast("⏳ Đang kiểm tra phiên bản...");
  addLog("Đang kiểm tra phiên bản...");
  try {
    let _0x3284fe = await fetch('/cgi-bin/update-sonwrt.sh');
    let _0x690894 = {};
    try {
      _0x690894 = await _0x3284fe.json();
    } catch {}
    if (_0x690894.status === 'skip') {
      showToast("🆗 Đã là phiên bản mới nhất (" + _0x690894.version + ')');
      addLog("Không cần cập nhật. Đã là bản mới nhất.");
      return;
    }
    if (_0x690894.status === 'ok') {
      showToast("✅ Đã cập nhật thành công!");
      addLog("Cập nhật hoàn tất!");
    } else {
      showToast("❌ Lỗi khi cập nhật!");
      addLog("Cập nhật thất bại!");
    }
  } catch (_0x48a58d) {
    showToast("❌ Lỗi hệ thống khi cập nhật!");
    addLog("Cập nhật lỗi: " + _0x48a58d);
  }
}
async function checkPasswallVersionAndToggleACL() {
  try {
    const _0x32f43f = await fetch("/lua-api/get_passwall_version.lua", {
      'cache': "no-store"
    });
    if (!_0x32f43f.ok) {
      throw new Error("Không lấy được phiên bản passwall2");
    }
    const _0x56318d = await _0x32f43f.json();
    const _0x1607bc = _0x56318d.version || '';
    const _0x594f01 = _0x1607bc.localeCompare("1.31-1", undefined, {
      'numeric': true
    }) >= 0x0;
    const _0x2ec6a1 = document.querySelector(".tab[title=\"Danh sách Proxy\"]");
    const _0x18dc3d = document.querySelector("button[onclick=\"openACLModal()\"]");
    const _0x3f3cc7 = document.querySelector("button.subtab[onclick=\"showDeviceSubtab('acl')\"]");
    const _0x4486cc = document.querySelector("#svcSelector option[value=\"passwall2\"]");
    if (!_0x594f01) {
      if (_0x2ec6a1) {
        _0x2ec6a1.style.display = "none";
      }
      if (_0x18dc3d) {
        _0x18dc3d.style.display = "none";
      }
      if (_0x3f3cc7) {
        _0x3f3cc7.style.display = "none";
      }
      if (_0x4486cc) {
        _0x4486cc.remove();
      }
    } else {
      if (_0x2ec6a1) {
        _0x2ec6a1.style.display = '';
      }
      if (_0x18dc3d) {
        _0x18dc3d.style.display = '';
      }
      if (_0x3f3cc7) {
        _0x3f3cc7.style.display = '';
      }
      if (svcSelector && !svcSelector.querySelector("option[value=\"passwall2\"]")) {
        const _0x8866cd = document.createElement("option");
        _0x8866cd.value = "passwall2";
        _0x8866cd.textContent = "Proxy";
        svcSelector.insertBefore(_0x8866cd, svcSelector.firstChild);
      }
    }
  } catch (_0x1aa786) {}
}
window.addEventListener("DOMContentLoaded", checkPasswallVersionAndToggleACL);
async function getRouterMac() {
  try {
    const _0x132b5d = await fetch("/lua-api/sonwrtadmin.lua");
    const _0x241abd = await _0x132b5d.json();
    return _0x241abd.mac || '';
  } catch (_0x48aef7) {
    return '';
  }
}
(async function () {
  // <<-- BỊ LOẠI BỎ
  // Phần kiểm tra địa chỉ MAC đã được loại bỏ hoàn toàn.
  // const _0x2405c5 = await getRouterMac();
  // window.sonwrt_mac = _0x2405c5;
  // if (!_0x2405c5) {
  //   document.body.innerHTML = "...";
  //   return;
  // }

  // <<-- BỊ LOẠI BỎ / THAY THẺ
  // Toàn bộ logic kiểm tra token và hiển thị form đăng nhập đã được loại bỏ.
  // Thay vào đó, chúng ta đi thẳng đến trạng thái "đã đăng nhập thành công".
  
  // const _0x2a60d9 = await readTokenFromRouter();
  // if (_0x2a60d9) {
  //   try {
  //     const _0xb59b64 = await fetch("https://sonwrt.glitch.me/api/validate-token", { ... });
  //     const _0x2eb087 = await _0xb59b64.json();
  //     if (_0x2eb087.valid) {
  //       showKeyStatus();
  //       setInterval(showKeyStatus, 0x7530);
  //       return;
  //     } else {
  //       await deleteTokenFromRouter();
  //     }
  //   } catch (_0x51a470) {
  //     console.error("Lỗi kết nối khi xác thực token");
  //   }
  // }

  // Toàn bộ phần chèn form đăng nhập và xử lý sự kiện submit đã bị loại bỏ.
  // document.body.insertAdjacentHTML('beforeend', "...login form...");
  // document.getElementById("sonwrt-login-form").onsubmit = async _0xd2ebcd => { ... };

  // <<-- THAY THẾ BẰNG
  // Đi thẳng đến hành động thành công, hiển thị trạng thái key và đặt lịch cập nhật.
  showKeyStatus();
  setInterval(showKeyStatus, 0x7530);
})();

// Các hàm này không còn được sử dụng trong logic chính nhưng được giữ lại
// để tránh lỗi nếu có phần khác của trang web gọi chúng.
async function saveTokenToRouter(_0x388a90) {
  await fetch("/lua-api/save_token.lua", {
    'method': 'POST',
    'headers': {
      'Content-Type': "application/json"
    },
    'body': JSON.stringify({
      'token': _0x388a90
    })
  });
}
async function readTokenFromRouter() {
  try {
    const _0x3ae958 = await fetch("/lua-api/read_token.lua");
    const _0x44d63e = await _0x3ae958.json();
    return _0x44d63e.token || null;
  } catch (_0xf811ea) {
    return null;
  }
}
async function deleteTokenFromRouter() {
  await fetch("/lua-api/delete_token.lua");
}

async function showKeyStatus() {
  // <<-- BỊ LOẠI BỎ / THAY THẾ
  // Chúng ta không cần đọc token từ router hay kiểm tra MAC nữa.
  // const _0x18a699 = await readTokenFromRouter();
  // const _0xce8980 = window.sonwrt_mac || '';
  // if (!_0x18a699 || !_0xce8980) {
  //   return;
  // }

  // <<-- THAY THẾ BẰNG
  // Tạo một phản hồi giả mạo (mock response) luôn hợp lệ.
  // Đặt thời gian hết hạn là 1 năm kể từ bây giờ.
  const farFutureDate = Date.now() + (365 * 24 * 60 * 60 * 1000);
  const _0x18a7ea = { valid: true, expiresAt: farFutureDate };

  // Toàn bộ logic fetch API cũ đã bị loại bỏ.
  // try {
  //   const _0x30971b = await fetch("https://sonwrt.glitch.me/api/key-status", { ... });
  //   const _0x18a7ea = await _0x30971b.json();
  //   ...
  // } catch (_0x4695e8) {}

  // Phần còn lại của hàm xử lý UI được giữ nguyên và sử dụng dữ liệu giả mạo ở trên.
  if (_0x18a7ea.valid && _0x18a7ea.expiresAt) {
    const _0x2f4f65 = Date.now();
    const _0x4a7bb1 = _0x18a7ea.expiresAt - _0x2f4f65;
    let _0x318820 = '';
    if (_0x4a7bb1 > 0x0) {
      const _0x422f84 = Math.floor(_0x4a7bb1 / 86400000);
      const _0x240d04 = Math.floor(_0x4a7bb1 / 3600000) % 0x18;
      const _0x8a63f = Math.floor(_0x4a7bb1 / 60000) % 0x3c;
      _0x318820 = (_0x422f84 > 0x0 ? _0x422f84 + " ngày " : '') + (_0x240d04 > 0x0 ? _0x240d04 + " giờ " : '') + (_0x8a63f > 0x0 ? _0x8a63f + " phút " : '');
    } else {
      _0x318820 = "Đã hết hạn!";
    }
    document.getElementById("sonwrt-key-status-float")?.['remove']();
    document.body.insertAdjacentHTML("afterbegin", "\n        <div id=\"sonwrt-key-status-float\">\n          <div id=\"sonwrt-key-popup\" style=\"\n            display:none;\n            position:fixed;top:40px;right:40px;z-index:99999;\n            background:#fffbe0;color:#9e7c00;padding:18px 24px 18px 24px;\n            border-radius:14px;\n            border:1px solid #ffe066;\n            box-shadow:0 2px 12px #0003;font-size:16px;min-width:230px;max-width:400px;\">\n            <span style=\"font-weight:bold;font-size:1px;vertical-align:-2px;\">⏳</span>\n            <span>Thời gian sử dụng key:</span>\n            <b>" + _0x318820 + "</b>\n            <a href=\"https://www.facebook.com/pham.viet.853811\" target=\"_blank\" style=\"color:#2563eb;font-weight:bold;text-decoration:none;margin-left:8px;\">📩 Gia hạn key</a>\n            <span id=\"sonwrt-key-close\" style=\"cursor:pointer;font-weight:bold;position:absolute;top:7px;right:16px;font-size:19px;\">×</span>\n          </div>\n<div id=\"sonwrt-key-float-btn\" style=\"\n  position:fixed;top:60px;right:16px;z-index:99999;pointer-events:auto;\n  width:35px;height:35px;display:flex;align-items:center;justify-content:center;\n  background:#fffbe0;border-radius:50%;border:1px solid #ffe066;box-shadow:0 2px 10px #0002;\n  cursor:pointer;font-size:15px;color:#9e7c00;transition:box-shadow .2s;\n\" title=\"Trạng thái key\">\n  ⏳\n</div>\n        </div>\n      ");
    setTimeout(() => {
      document.getElementById("sonwrt-key-float-btn").addEventListener("click", () => {
        document.getElementById("sonwrt-key-popup").style.display = "block";
        document.getElementById("sonwrt-key-float-btn").style.display = 'none';
      });
    }, 0x0);
    makeDraggable("sonwrt-key-float-btn");
    document.getElementById("sonwrt-key-close").onclick = function () {
      document.getElementById("sonwrt-key-popup").style.display = "none";
      document.getElementById("sonwrt-key-float-btn").style.display = "flex";
    };
  }
}
function makeDraggable(_0x2a7d05) {
  const _0x4e425f = document.getElementById(_0x2a7d05);
  let _0x184077 = false;
  let _0x54a7c7;
  let _0x2eecb2;
  let _0x152348;
  let _0x288858;
  _0x4e425f.onmousedown = function (_0x160a87) {
    _0x184077 = true;
    _0x54a7c7 = _0x160a87.clientX;
    _0x2eecb2 = _0x160a87.clientY;
    _0x152348 = parseInt(_0x4e425f.style.right) || 0x10;
    _0x288858 = parseInt(_0x4e425f.style.top) || 0x3c;
    document.body.style.userSelect = "none";
    _0x160a87.preventDefault();
  };
  document.onmousemove = function (_0x32f48a) {
    if (_0x184077) {
      let _0x4f1b18 = _0x32f48a.clientX - _0x54a7c7;
      let _0x5e217f = _0x32f48a.clientY - _0x2eecb2;
      let _0x2308cd = _0x152348 - _0x4f1b18;
      let _0x484ebd = _0x288858 + _0x5e217f;
      _0x2308cd = Math.max(0x0, Math.min(window.innerWidth - _0x4e425f.offsetWidth, _0x2308cd));
      _0x484ebd = Math.max(0x0, Math.min(window.innerHeight - _0x4e425f.offsetHeight, _0x484ebd));
      _0x4e425f.style.right = _0x2308cd + 'px';
      _0x4e425f.style.top = _0x484ebd + 'px';
    }
  };
  document.onmouseup = function () {
    _0x184077 = false;
    document.body.style.userSelect = '';
  };
  _0x4e425f.ontouchstart = function (_0x93d036) {
    _0x184077 = true;
    const _0x3f17ef = _0x93d036.touches[0x0];
    _0x54a7c7 = _0x3f17ef.clientX;
    _0x2eecb2 = _0x3f17ef.clientY;
    _0x152348 = parseInt(_0x4e425f.style.right) || 0x10;
    _0x288858 = parseInt(_0x4e425f.style.top) || 0x3c;
    document.body.style.userSelect = "none";
    _0x93d036.preventDefault();
  };
  document.ontouchmove = function (_0x3f88e9) {
    if (_0x184077) {
      const _0x1d9e7c = _0x3f88e9.touches[0x0];
      let _0x18f619 = _0x1d9e7c.clientX - _0x54a7c7;
      let _0x1d4062 = _0x1d9e7c.clientY - _0x2eecb2;
      let _0x32f168 = _0x152348 - _0x18f619;
      let _0x1e6f65 = _0x288858 + _0x1d4062;
      _0x32f168 = Math.max(0x0, Math.min(window.innerWidth - _0x4e425f.offsetWidth, _0x32f168));
      _0x1e6f65 = Math.max(0x0, Math.min(window.innerHeight - _0x4e425f.offsetHeight, _0x1e6f65));
      _0x4e425f.style.right = _0x32f168 + 'px';
      _0x4e425f.style.top = _0x1e6f65 + 'px';
    }
  };
  document.ontouchend = function () {
    _0x184077 = false;
    document.body.style.userSelect = '';
  };
}
document.addEventListener("contextmenu", function (_0x321f2d) {
  _0x321f2d.preventDefault();
});

// Lấy các phần tử cần thiết từ DOM
const card = document.getElementById('khung-pop');
const toggleBtn = document.getElementById('toggle-view-btn');

function toggleExpandedView() {
    // Kiểm tra xem thẻ đã có class 'expanded-view' chưa
    const isExpanded = card.classList.contains('expanded-view');

    if (isExpanded) {
        // Nếu đã mở rộng, thì thu nhỏ lại
        card.classList.remove('expanded-view');
        toggleBtn.innerText = 'Xem tất cả'; // Đổi lại tên button

        // Tìm và xóa lớp nền mờ đi
        const backdrop = document.querySelector('.backdrop');
        if (backdrop) {
            backdrop.remove();
        }
    } else {
        // Nếu chưa mở rộng, thì mở rộng ra
        card.classList.add('expanded-view');
        toggleBtn.innerText = 'Thu gọn'; // Đổi tên button

        // Tạo và thêm lớp nền mờ vào trang
        const backdrop = document.createElement('div');
        backdrop.className = 'backdrop';
        document.body.appendChild(backdrop);

        // Thêm sự kiện click vào lớp nền mờ để thu nhỏ lại
        backdrop.addEventListener('click', toggleExpandedView);
    }
}

