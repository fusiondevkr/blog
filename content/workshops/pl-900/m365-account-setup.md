---
title: ➕ M365 개발자 테넌트 및 추가 계정 생성
description: 파워 플랫폼 실습을 위해 M365 개발자 테넌트를 생성하고, 필요한 계정을 생성합니다.
order: 5101
---

파워 플랫폼 실습을 위해서는 Microsoft 365 개발자 테넌트를 먼저 구성해야 합니다.


## M365 개발자 테넌트 및 개발자 계정 생성 ##

아래 페이지를 참조해서 Microsoft 365 개발자 테넌트 및 개발자 계정을 생성합니다. 이 때 편의상, 개발자 계정의 페르소나를 마케팅 담당자인 안지민씨로 설정할 예정이므로 `jimin.ahn@<테넌트이름>.onmicrosoft.com` 이라는 이름으로 만들기로 합니다.

* [M365 개발자 계정 생성하기](/m365/m365-dev-setup)

> **체크포인트**:
> 
> * [M365 개발자 테넌트 및 어드민 계정 생성하기 6번 항목 끝난 후](https://aka.ms/fdk/workshop/checkin/01)
> * [M365 개발자 테넌트 및 어드민 계정 생성하기 12번 항목 끝난 후](https://aka.ms/fdk/workshop/checkin/02)


## M365 개발자 계정 이름 변경 ##

아래 페이지를 참조해서 M365 개발자 계정 이름을 변경합니다.

* [제 M365 개발자 계정 이름이 LNU FNU 라고 자동으로 붙었는데, 어디서 바꿀 수 있나요?](https://github.com/fusiondevkr/pl900/discussions/27)

> **체크포인트**:
> 
> * [M365 어드민 계정 이름 바꾸기 끝난 후](https://aka.ms/fdk/workshop/checkin/03)


그리고 파워 플랫폼 개발자 계정을 생성합니다.

* [파워 플랫폼 개발자 계정 생성하기](/pp/pp-dev-setup)

> **체크포인트**:
> 
> * [파워 플랫폼 개발자 환경 생성 후](https://aka.ms/fdk/workshop/checkin/04)


## 추가 계정 생성 ##

이 외에도 가맹점 점잠 페로소나인 김온유씨의 계정과 마케팅 부서장의 페르소나인 문정연씨의 계정도 만들어야 합니다. 편의상 아래 이름으로 만들기로 합니다.

* **김온유**: `onyu.kim@<테넌트이름>.onmicrosoft.com`
* **문정연**: `jungyeon.moon@<테넌트이름>.onmicrosoft.com`

> **체크포인트**:
> 
> * [추가 계정 생성 후](https://aka.ms/fdk/workshop/checkin/05)


## 보안 그룹 구성 ##

파워 앱과 파워 오토메이트를 원활하게 이용하기 위해서는 [보안 그룹][m365 security group]을 구성해서 앞서 생성한 계정을 추가해야 합니다. 여기서는 "**PL900SecurityGroup**" 이라는 이름으로 보안 그룹을 하나 생성하고 위에 생성한 계정을 모두 추가합니다.

> **체크포인트**:
> 
> * [보안 그룹 생성 후](https://aka.ms/fdk/workshop/checkin/06)


## 다음 순서 ##

1. 배경 설명
2. M365 개발자 테넌트 및 추가 계정 생성
3. [웹 브라우저 프로필 구성][handson browser profile] 👈
<!-- 4. M365 개발자 계정 등록 -->
5. Microsoft 리스트 만들기
6. 파워 앱 실습 #1
7. 파워 오토메이트 실습
8. 파워 앱 실습 #2


[m365 security group]: https://docs.microsoft.com/ko-kr/microsoft-365/admin/email/create-edit-or-delete-a-security-group?WT.mc_id=power-34890-juyoo

[handson background]: ../background
[handson m365 create]: ../m365-account-setup
[handson browser profile]: ../web-browser-setup
[handson m365 rego]: ../m365-account-registration
[handson m365 list]: ../m365-list
[handson pas 1]: ../power-apps-1
[handson pau]: ../power-automate
[handson pas 2]: ../power-apps-2
