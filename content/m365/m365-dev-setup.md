---
title: 마이크로소프트 365 개발자 테넌트 생성하기
description: 파워 플랫폼의 애플리케이션을 개발하기 위해서는 우선 마이크로소프트 365(M365) 개발자 테넌트가 필요합니다. 여기서는 M365 개발자 테넌트를 생성하고 그에 따른 어드민 계정을 만들어 기본적인 설정을 하는 방법에 대해 알아봅니다.
order: 601
---

[파워 플랫폼][pp]의 애플리케이션을 개발하기 위해서는 우선 [마이크로소프트 365(M365)][m365] 개발자 테넌트가 필요합니다. 여기서는 M365 개발자 테넌트를 생성하고 그에 따른 어드민 계정을 만들어 기본적인 설정을 하는 방법에 대해 알아봅니다.


## M365 개발자 테넌트 생성을 위해 필요한 것들 ##

* [마이크로소프트 계정][msa]이 필요합니다. 만약, 현재 M365 계정을 사용하고 있다면 그것을 사용해도 됩니다.


## M365 개발자 테넌트 및 어드민 계정 생성하기 ##

1. [https://aka.ms/M365DevAccount][m365 dev] 페이지에 접속합니다. 현재 영문 페이지로만 컨텐츠를 제공하고 있습니다.
    ![M365 개발자 프로그램 랜딩 페이지][image-01]
    &nbsp;
1. 위 그림의 `Join now >` 버튼을 클릭하여 자신의 [마이크로소프트 계정][msa]으로 로그인합니다. 만약 계정이 없다면 새로 하나 만들면 됩니다.
1. 로그인 후에 아래와 같이 보이는 화면에서 국가, 회사명, 선호 언어를 선택하세요. 이 화면에서는 아직 한국어를 선택할 수 없으니, English 옵션을 선택합니다. 첫번째 체크박스까지 선택한 후에 `Next` 버튼을 클릭해서 다음 화면으로 넘어갑니다.
    ![M365 개발자 프로그램 기본정보 입력 화면][image-02]
    &nbsp;
1. 이 개발자 계정의 주 용도를 선택합니다. 아무거나 선택해도 상관 없습니다만, 여기서는 `Custom solutions for my own customers (고객 대상 커스텀 솔루션 개발)` 정도로 선택합니다. `Next` 버튼을 클릭해서 다음 화면으로 이동합니다.
    ![M365 개발자 프로그램 용도 설문 입력 화면][image-03]
    &nbsp;
1. 이 개발자 계정의 개발 분야를 입력합니다. 아무거나 하나만 선택해도 되긴 하지만, 여기서는 모두 선택합니다. 그리고 `Save` 버튼을 클릭해서 계정 생성 과정을 마무리합니다.
    ![M365 개발자 프로그램 개발 분야 설문 입력 화면][image-04]
    &nbsp;
1. 계정 생성이 끝나면 아래와 같은 환영 메시지가 나타납니다. `Close` 버튼을 클릭하여 팝업 화면을 닫습니다.
    ![M365 개발자 프로그램 환영 팝업 화면][image-05]
    &nbsp;
1. 개발자 계정은 만들어졌지만, 아직 M365 설정이 다 끝난 것은 아닙니다. 팝업 화면이 사라지면 `Set up E5 subscription` 버튼을 클릭합니다.
    ![M365 개발자 프로그램 환영 화면 #1][image-06]
    &nbsp;
1. 또 다른 팝업 화면이 나타납니다. 아래와 같이 전체 관리자 계정 정보를 입력합니다. 여기서는 계정을 `admin`, M365 테넌트용 도메인 이름을 `mym365devaccount`라고 지정했습니다. 모두 입력한 후 `Continue` 버튼을 클릭합니다.
    ![M365 개발자 테넌트 정보 입력 화면][image-07]
    &nbsp;
1. 본인 인증을 위해 문자 메시지를 받을 수 있는 핸드폰 번호를 입력합니다. 국가 코드를 선택하고 핸드폰 번호를 입력한 후 `Send Code` 버튼을 클릭합니다.
    ![M365 개발자 본인 인증 정보 입력 화면 #1][image-08]
    &nbsp;
1. 핸드폰 문자 메시지를 통해 인증 코드를 받으면 아래와 같이 인증 코드를 입력한 후 `Set up` 버튼을 클릭하여 설정을 마무리합니다.
    ![M365 개발자 본인 인증 정보 입력 화면 #2][image-09]
    &nbsp;
1. M365 구독 설정까지 끝나게 되면 아래와 같은 대시보드를 볼 수 있는데요, 방금 생성한 M365 개발자 계정이 92일 남았다고 표시하고 있습니다. 아래 그림과 같이 `Go to subscription` 링크를 클릭해서 M365 구독 화면으로 이동합니다.
    ![M365 개발자 프로그램 환영 화면 #2][image-10]
    &nbsp;
1. 아래와 같이 M365 포탈 화면이 나타납니다. 화면 왼쪽에 보면 현재 사용 가능한 M365 애플리케이션이 보입니다.
    ![M365 포탈 화면][image-11]
    &nbsp;

여기까지 해서 M365 개발자 테넌트 및 계정을 생성하고, M365 개발자 구독을 생성했습니다.


## M365 개발자 계정 라이센스 관련 알아두어야 할 것들 ##

* M365 개발자 계정은 기본적으로 **25개**의 [Microsoft 365 E5 개발자 구독][m365 dev subscription]을 제공합니다. 따라서, 이를 활용해서 충분히 다양한 시나리오에 맞춰 개발할 수 있게끔 설정이 되어 있습니다.
* M365 개발자 계정은 [매 90일마다 라이센스를 갱신][m365 dev expiration]합니다. 이 기간 중 계속해서 이 계정을 이용해 애플리케이션을 개발한다면 자동으로 90일씩 무제한 갱신이 됩니다. 따라서, 계정을 삭제당하지 않으려면 계속해서 이 개발자 계정을 이용해서 개발 활동을 해야 합니다.


## 다음 순서 ##

* M365 개발자 계정 생성이 끝났다면, 이제 파워 플랫폼 개발자 계정을 생성해야 합니다. 이는 [파워 플랫폼 개발자 계정 생성][pp dev account] 페이지를 참조하세요.
* 만약 파워 플랫폼 실습을 하고 싶다면 [핸즈온 워크샵 및 부트캠프](/workshops) 페이지를 참조하세요.



[image-01]: ../images/m365/m365-dev-setup-01.png
[image-02]: ../images/m365/m365-dev-setup-02.png
[image-03]: ../images/m365/m365-dev-setup-03.png
[image-04]: ../images/m365/m365-dev-setup-04.png
[image-05]: ../images/m365/m365-dev-setup-05.png
[image-06]: ../images/m365/m365-dev-setup-06.png
[image-07]: ../images/m365/m365-dev-setup-07.png
[image-08]: ../images/m365/m365-dev-setup-08.png
[image-09]: ../images/m365/m365-dev-setup-09.png
[image-10]: ../images/m365/m365-dev-setup-10.png
[image-11]: ../images/m365/m365-dev-setup-11.png

[msa]: https://account.microsoft.com/?WT.mc_id=power-34890-juyoo

[pp]: https://powerplatform.microsoft.com/ko-kr/?WT.mc_id=power-34890-juyoo
[pp dev account]: /pp/pp-dev-setup

[m365]: https://www.microsoft.com/ko-kr/microsoft-365?WT.mc_id=power-34890-juyoo
[m365 dev]: https://developer.microsoft.com/ko-kr/microsoft-365/dev-program?WT.mc_id=power-34890-juyoo
[m365 dev expiration]: https://docs.microsoft.com/ko-kr/office/developer-program/microsoft-365-developer-program-faq?WT.mc_id=power-34890-juyoo#how-long-is-my-subscription-good-for--and-when-does-it-expire-
[m365 dev licenses]: https://docs.microsoft.com/ko-kr/office/developer-program/microsoft-365-developer-program-faq?WT.mc_id=power-34890-juyoo#how-many-user-licenses-does-the-developer-subscription-include-
[m365 dev subscription]: https://docs.microsoft.com/ko-kr/visualstudio/subscriptions/vs-m365?WT.mc_id=power-34890-juyoo
