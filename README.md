# KPA Pedia

공연 및 축제 정보를 확인하고 검색할 수 있습니다.

<br />

## 🎉 **배포 주소**

- [https://kpa-pedia.netlify.app/](https://kpa-pedia.netlify.app/)

<br />

## 👬 **팀원**

- 개인 프로젝트

<br>

## 📅 **개발 기간**

- 2022년 06월 01일 ~ 2022년 06월 05일

<br />

## 🔧 **기술스택**

- Typescript, React, SASS, react-query, recoil

<br />

## 💻 **설치 및 실행 방법**

1. yarn 설치

```
 npm i yarn
```

2. repository 클론

```
git clone https://github.com/Yu-jae-min/POB_KPAPedia.git
```

3. dependencies 설치

```
yarn install
```

4. 실행

```
yarn start
```

## 📒 **구현 목록**

|로그인|홈|예매 현황|
|:-:|:-:|:-:|
|![00_login](https://user-images.githubusercontent.com/85284246/172006013-a3b413c4-aeac-4494-8516-d0d15d5cdf98.png)|![01_home](https://user-images.githubusercontent.com/85284246/172006029-28833245-21a0-4e06-a567-3989bf4e8810.png)|![02_boxOffice](https://user-images.githubusercontent.com/85284246/172006038-d5ae8a4e-282f-4687-9660-4005a8f6c4d3.png)|
|공연 목록|축제 목록|수상작|
|![03_performance](https://user-images.githubusercontent.com/85284246/172006041-1f1f78ee-bf32-404c-b5db-0ac5a067402f.png)|![04_festival](https://user-images.githubusercontent.com/85284246/172006196-fb401201-6142-49d3-805d-7999e9bcb714.png)|![05_awards](https://user-images.githubusercontent.com/85284246/172006104-c2315dc9-d813-4154-b691-f87b3383cdee.png)|
상세 페이지|
![06_detail](https://user-images.githubusercontent.com/85284246/172006220-dfbfa0a4-61e9-4857-bd7d-751969347ee8.png)|

<br />

### # 로그인

- [x] 아이디 입력 창 및 비밀번호 입력 창

  - [x] 정규식과 match 메소드를 활용한 이메일 유효성 및 비밀번호 유효성 검사

  - [x] 입력 폼 틀린 경우 input 하단에 경고 label 노출

- [x] 로그인 버튼

  - [x] 아이디, 비밀번호 입력 폼 모두 맞는 경우 버튼 자동 활성화

  - [x] 아이디, 비밀번호 입력 폼 틀린 상태에서 버튼 클릭 시 경고 모달 노출

    - [x] Portal과 children을 활용한 모달 구현

  - [x] 활성화 버튼 클릭 시 메인 페이지로 이동 및 storejs 라이브러리를 활용하여 로컬 스토리지에 유저 아이디 저장

- [x] 로그인 체크

  - [x] Custom Hook을 활용한 Login, LogOut 함수 관리

  - [x] 사이트 접속 시 로컬 스토리지에 login key가 없는 경우 로그인 페이지로 자동 이동

<br>

### # 헤더

- [x] 헤더 로고

  - [x] 클릭 시 메인 페이지로 이동

  - [x] svg icon을 유동적인 스타일로 활용하기 위해 컴포넌트로 변환하여 사용

- [x] 네비게이션 메뉴

  - [x] 네비게이션 메뉴 클릭 시 해당 페이지로 이동

  - [x] 네비게이션 메뉴 클릭 시 classnames 라이브러리를 활용한 활성화 기능

- [x] 로그인 유저 아이디 표시

- [x] 로그아웃 버튼

  - [x] 로그아웃 버튼 클릭 시 로그인 페이지로 이동

  - [x] 로컬 스토리지에 저장 된 login key 데이터 삭제

<br>

### # 홈

- [x] 타이틀에 맞는 각각의 리스트 노출

- [x] 각각의 리스트 컴포넌트로 분리

<br>

### # 예매 현황

- [x] 박스오피스 썸네일 리스트

  - [x] filter 메소드를 활용하여 상위 7위까지의 리스트는 썸네일을 포함하여 노출

- [x] 박스오피스 테이블 리스트

  - [x] slice 메소드를 활용한 상위 30위 아이템 리스트 생성

  - [x] 1위 테이블 데이터 컬러 활성화

  - [x] 자세히 보기 버튼 클릭 시 상세 페이지 이동

<br>

### # 공연목록, 축제목록, 수상작

- [x] 검색 창

  - [x] filter 메소드를 활용한 검색 기능 구현

  - [x] 검색 창에 검색어 입력 시 연속 API 호출을 막기 위한 Debouncing 구현

  - [x] 검색어 입력 시 toLowerCase 메소드를 활용하여 영문 대소문자 구분하지 않는 검색 결과 노출

  - [x] 검색 결과 있는 경우 검색 결과 노출 후 무한 스크롤 기능 중지

  - [x] 검색 결과 없는 경우 검색 결과 없음 표시

  - [x] 검색 대상이 되는 전체 아이템 리스트 비동기 요청이 완료되기 전 검색 창 disable true로 입력 불가 처리

- [x] 무한 스크롤

  - [x] useInView Hook을 사용하여 무한 스크롤 구현, Scroll 하단 위치 시 API 재요청

<br>

### # 상세 페이지

- [x] 동적 라우팅

- [x] 해당 아이템의 상세 내용 표시

<br>

### # 공통

- [x] 비동기 통신

  - [x] API Key 환경 변수로 관리

  - [x] react-query를 사용하여 데이터 캐싱

  - [x] 요청 시 조건에 따른 스피너 노출

  - [x] 요청 에러 시 조건에 따른 에러 컴포넌트 노출

  - [x] CORS 에러 proxy 로 우회

  - [x] xml 데이터 json 형식으로 변환

- [x] 비동기 통신 로딩 처리

  - [x] axios 비동기 통신 시 useState Hook을 활용한 Spinner 처리

  - [x] react-query 비동기 통신 시 isLoading을 활용한 Spinner 처리

- [x] 비동기 통신 에러 처리

  - [x] axios 비동기 통신 시 catch 메소드를 활용한 에러 처리

  - [x] react-query 비동기 통신 시 isError를 활용한 에러 처리

- [x] 404 Not found 페이지 구현

- [x] Layout 컴포넌트에 Outlet을 활용한 전체 Layout 설정

- [x] ScrollTop 컴포넌트 추가하여 페이지 전환 시 스크롤 하단에 위치한 에러 수정

- [x] SEO 측면을 고려하여 react-helmet을 활용하여 각 페이지별 메타 태그 설정

- [x] 썸네일 리스트 및 상세 페이지

  - [x] 전체 페이지의 썸네일 리스트 및 상세 페이지 하나의 컴포넌트로 관리

  - [x] 썸네일 마우스 호버 시 이미지 스케일 증가

  - [x] 썸네일 클릭 시 상세 페이지로 이동

<br>
