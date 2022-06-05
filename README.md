
# KPA Pedia

[🎉  배포주소](https://kpa-pedia.netlify.app/)

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

## **💻 설치 및 실행 방법**

1. yarn 설치

```
 npm i yarn
```

2. repository 클론

```
git clone git@https://github.com/Yu-jae-min/POB_KPAPedia.git
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
  - [x] 정규식을 활용하여 이메일 유효성 및 비밀번호 유효성 검사
  - [x] 입력 폼 틀린 경우 경고 라벨 노출
- [x] 로그인 버튼
  - [x] 두 가지의 입력 폼 모두 맞는 경우 버튼 자동 활성화
  - [x] 활성화 버튼 클릭 시 홈으로 이동 및 로컬 스토리지에 유저 아이디 저장
  - [x] 아이디, 비밀번호 입력 폼 틀린 후 버튼 클릭 시 경고 모달 노출

<br>

### # 헤더

- [x] 헤더 로고 클릭 시 홈으로 이동
- [x] 네비게이션 메뉴 클릭 시 페이지 이동
- [x] 로그아웃 버튼 클릭 시 로그인 페이지로 이동 및 로컬 스토리지에 저장 된 유저 아이디 삭제
- [x] 로그인 유저 아이디 표시

<br>

### # 홈

- [x] 타이틀에 맞는 각각의 리스트 노출

<br>

### # 예매 현황

- [x] 수상 리스트 노출
  - [x] 상위 7위까지 썸네일 노출
  - [x] 전체 리스트 테이블
    - [x] 1순위 테이블 데이터 컬러 활성화
    - [x] 자세히 보기 버튼 클릭 시 상세 페이지 이동

<br>

### # 공연목록, 축제목록, 수상작

- [x] 스크롤이 하단 위치 시 추가 리스트 노출
- [x] 검색 기능
  - [x] 검색 창에 검색어 입력 시 연달아 호출하지 않도록 디바운싱 구현
  - [x] 검색어 입력 시 영문 대소문자 구분하지 않음
  - [x] 검색 결과 없는 경우 검색 결과 없음을 알리는 컴포넌트 노출
  - [x] 검색 결과 있는 경우 무한 스크롤 중지
  - [x] 검색 대상이 되는 전체 아이템 리스트 요청이 완료되기 전 검색 창 입력 불가

<br>

### # 상세 페이지

- [x] 동적 라우팅 적용
- [x] 해당 아이템의 상세 내용 표시

<br>

### # 공통

- [x] 각 페이지별 메타 태그 설정
- [x] 아이템 리스트 썸네일
  - [x] 썸네일 마우스 호버 시 이미지 스케일 증가
  - [x] 썸네일 클릭 시 상세 페이지로 이동
- [x] API 통신
  - [x] react-query를 사용하여 데이터 캐싱
  - [x] 요청 시 조건에 따른 스피너 노출
  - [x] 요청 에러 시 조건에 따른 에러 컴포넌트 노출

<br>
