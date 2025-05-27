document.addEventListener('DOMContentLoaded', function() {
    // 스크롤 이벤트로 작품 등장 애니메이션 적용
    const artworks = document.querySelectorAll('.artwork');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });
    
    artworks.forEach(artwork => {
        artwork.style.opacity = 0;
        observer.observe(artwork);
    });
    
    // 작품 이미지 탭 시 확대 보기 기능 제거
    // artworks.forEach(artwork => {
    //     const artworkImage = artwork.querySelector('.artwork-image');
    //     artworkImage.addEventListener('click', function() {
    //         const modal = document.createElement('div');
    //         modal.className = 'modal';
    //         
    //         const modalContent = document.createElement('div');
    //         modalContent.className = 'modal-content';
    //         
    //         const image = document.createElement('div');
    //         image.className = 'modal-image';
    //         image.style.backgroundImage = this.style.backgroundImage;
    //         
    //         const closeButton = document.createElement('span');
    //         closeButton.className = 'close-button';
    //         closeButton.innerHTML = '&times;';
    //         closeButton.addEventListener('click', function() {
    //             document.body.removeChild(modal);
    //             document.body.style.overflow = 'auto';
    //         });
    //         
    //         modalContent.appendChild(closeButton);
    //         modalContent.appendChild(image);
    //         modal.appendChild(modalContent);
    //         
    //         document.body.appendChild(modal);
    //         document.body.style.overflow = 'hidden';
    //         
    //         modal.addEventListener('click', function(e) {
    //             if (e.target === modal) {
    //                 document.body.removeChild(modal);
    //                 document.body.style.overflow = 'auto';
    //             }
    //         });
    //     });
    // });
    
    // 페이지 로드 시 헤더 애니메이션
    const header = document.querySelector('header');
    header.classList.add('header-loaded');
    
    // 스타일 추가
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            animation: fadeIn 1s forwards;
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .header-loaded {
            animation: headerLoad 1.2s ease-out forwards;
        }
        
        @keyframes headerLoad {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        /* 모달 관련 CSS 제거
        .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.85);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            animation: modalFadeIn 0.3s ease-out;
        }
        
        @keyframes modalFadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        
        .modal-content {
            position: relative;
            width: 90%;
            max-width: 800px;
            max-height: 90vh;
            overflow: auto;
        }
        
        .modal-image {
            width: 100%;
            height: 0;
            padding-bottom: 141.4%;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
        }
        
        .close-button {
            position: absolute;
            top: 10px;
            right: 20px;
            font-size: 2rem;
            color: white;
            cursor: pointer;
            z-index: 1001;
        }
        */
    `;
    document.head.appendChild(style);
}); 