fetch("static/development.json")
  .then(response => response.json())
  .then(development => {
    const container = document.getElementById("development-list");

    development.forEach(development => {
      const item = document.createElement("div");
      item.classList.add("item");
    
      item.innerHTML = `
        <div class="info">
          <img src="${development.image}" alt="개발 이미지">
          <div class="name">${development.name}</div>
          <button class="toggle-detail">자세히 보기</button>
          <div class="detail">${development.explanation}</div>
        </div>
      `;

      const button = item.querySelector('.toggle-detail');
      const detail = item.querySelector('.detail');

      button.addEventListener('click', () => {
        const isVisible = detail.style.display === 'block';
        detail.style.display = isVisible ? 'none' : 'block';
        button.textContent = isVisible ? '자세히 보기' : '간단히 보기';
      });

      // ✅ 클릭 시 이동
      // item.addEventListener("click", () => {
      //   window.location.href = content.url;
      // });

      container.appendChild(item);
    });
  })
  .catch(error => console.error("컨텐츠 목록을 불러오는 데 실패했습니다:", error));
