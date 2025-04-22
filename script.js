// Danh sách đề tài MC
const topics = [
    'Giới thiệu sự kiện và khách mời',
    'Khai mạc chương trình',
    'Giới thiệu diễn giả chính',
    'Phần hỏi đáp khán giả',
    'Tổng kết và cảm ơn',
    'Minigame tương tác cùng khán giả',
    'Giới thiệu sản phẩm mới',
    'Phát biểu đại diện Ban tổ chức',
    'Lời chúc mừng và khép lại sự kiện'
  ];
  
  // Element references
  const pickBtn       = document.getElementById('pickBtn');
  const modalOverlay  = document.getElementById('modal-overlay');
  const modalText     = document.getElementById('modal-text');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  
  pickBtn.addEventListener('click', () => {
    const idx = Math.floor(Math.random() * topics.length);
    modalText.textContent = topics[idx];
    modalOverlay.style.display = 'flex';
  });
  
  modalCloseBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
    // Người dùng có thể nhấn lại "Chọn Ngẫu Nhiên" để quay tiếp
  });
  