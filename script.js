// Danh sách đề tài MC
const topics = [
    'Giới thiệu sự kiện và khách mời',
    'Khai mạc chương trình',
    'Giới thiệu diễn giả chính',
    'Phần hỏi đáp khán giả',
    'Tổng kết và cảm ơn',
    'Minigame tương tác cùng khán giả',
    'Giới thiệu sản phẩm mới',
    'Thông báo chương trình bốc thăm may mắn',
    'Phát biểu đại diện Ban tổ chức',
    'Lời chúc mừng và khép lại sự kiện'
  ];
  
  const topicEl = document.getElementById('topic');
  const pickBtn = document.getElementById('pickBtn');
  
  pickBtn.addEventListener('click', () => {
    const idx = Math.floor(Math.random() * topics.length);
    topicEl.style.opacity = '0';
    setTimeout(() => {
      topicEl.textContent = topics[idx];
      topicEl.style.opacity = '1';
    }, 100);
  });
  