# 동국대학교 동양화 전시회 웹사이트

동국대학교 동양화 전시회를 위한 모바일 최적화 웹사이트입니다.

## 기능

- 반응형 모바일 디자인
- 작품 갤러리 (5개 작품)
- 전시 정보
- 이미지 클릭 시 확대 기능
- 스크롤 애니메이션

## 시작하기

1. 로컬에서 웹사이트를 실행하려면 다음 명령어를 사용하세요:

```bash
# 만약 Python이 설치되어 있다면:
python -m http.server 8000

# 또는 Node.js가 설치되어 있다면:
npx http-server
```

2. 브라우저에서 `http://localhost:8000`으로 접속하여 웹사이트를 확인할 수 있습니다.

## 구조

- `index.html`: 메인 HTML 파일
- `css/style.css`: 스타일시트
- `js/script.js`: 자바스크립트
- `images/`: 이미지 파일 디렉토리

## 이미지 추가하기

실제 동양화 작품 이미지를 사용하려면 다음과 같은 이름으로 `images/` 폴더에 저장하세요:

- `header-bg.jpg`: 헤더 배경 이미지
- `artwork1.jpg`: 첫 번째 작품 이미지
- `artwork2.jpg`: 두 번째 작품 이미지
- `artwork3.jpg`: 세 번째 작품 이미지
- `artwork4.jpg`: 네 번째 작품 이미지
- `artwork5.jpg`: 다섯 번째 작품 이미지

이미지를 추가한 후에는 `css/style.css` 파일의 임시 URL을 실제 이미지 파일 경로로 변경하세요.

## QR 코드 생성

배포 후에는 웹사이트 URL로 QR 코드를 생성하여 전시회 방문객들이 쉽게 접속할 수 있도록 할 수 있습니다.

## 정보 업데이트

전시 정보 및 작품 정보를 업데이트하려면 `index.html` 파일의 해당 내용을 수정하세요. 