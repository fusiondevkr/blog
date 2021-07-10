---
title: 파워 플랫폼 개발자 계정 생성하기
description: 파워 플랫폼의 애플리케이션을 개발하기 위해서는 우선 파워 플랫폼 개발자 계정이 필요합니다. 여기서는 파워 플랫폼 개발자 계정을 생성하고 기본적인 설정을 하는 방법에 대해 알아봅니다.
order: 1001
---

[파워 플랫폼][pp]의 애플리케이션을 개발하기 위해서는 우선 파워 플랫폼 개발자 계정이 필요합니다. 여기서는 파워 플랫폼 개발자 계정을 생성하고 기본적인 설정을 하는 방법에 대해 알아봅니다.


## 파워 플랫폼 개발자 계정 생성을 위해 필요한 것들 ##

* [마이크로365(M365) 개발자 계정][m365 dev]이 필요합니다. 아직 개발자 계정을 생성하지 않았다면, 우선 개발자 계정부터 먼저 만드세요. 👉 [M365 개발자 계정 생성하기][m365 dev setup]


## 파워 플랫폼 개발자 계정 생성하기 ##

> 실제로는 파워 앱 개발자 계정이지만, 여기서는 편의상 파워 플랫폼 개발자 계정이라고 하겠습니다.

1. [https://aka.ms/PowerAppsDevPlan][pp dev] 페이지에 접속합니다. `무료로 시작하기 >` 버튼을 클릭합니다.
    ![파워 앱 개발자 프로그램 랜딩 페이지][image-01]
    &nbsp;
1. 앞서 생성했던 M365 개발자 프로그램의 계정을 입력합니다. 여기서는 `admin@mym365devaccount.onmicrosoft.com` 입니다. `Sign up` 버튼을 클릭하여 다음으로 넘어갑니다.
    ![파워 앱 개발자 프로그램 이메일 주소 확인][image-02]
    &nbsp;
1. 입력한 이메일 주소가 M365 계정이라면 아래와 같이 유효한 이메일 주소라는 확인 메시지가 나타납니다. `Sign in` 버튼을 눌러 다음으로 넘어갑니다.
    ![파워 앱 개발자 프로그램 이메일 주소 인증][image-03]
    &nbsp;
1. 마케팅 정보 수집에 대해 동의하는지에 대한 체크박스입니다. 건너뛰어도 상관 없습니다. `Start` 버튼을 클릭해서 다음으로 넘어갑니다.
    ![마케팅 정보 수집 동의][image-04]
    &nbsp;
1. 마지막으로 파워 플랫폼 데이터 센터의 지역을 선택하는 화면이 나타납니다. `Korea`로 선택하고 `Accept` 버튼을 클릭하여 마무리합니다.
    ![파워 플랫폼 데이터 센터 지역 선택][image-05]
    &nbsp;
1. 모든 설정 절차가 끝나고 나면 파워 앱 스튜디오 화면이 나타납니다. 이 때 우측 상단의 Environment를 클릭하면 아래 그림과 같이 두 개의 환경이 만들어져 있습니다. `mym365devaccount (default)`는 M365 개발자 계정 생성시 만들어진 것이고, 현재 선택된 `XXX's Environment` 라는 환경은 파워 플랫폼 개발자 계정을 통해 만들어진 것입니다.
    ![파워 플랫폼 스튜디오][image-06]
    &nbsp;

여기까지 해서 파워 플랫폼 개발자 계정을 생성했고 그에 따른 개발 환경을 설정했습니다.


## 다음 순서 ##

이제 파워 플랫폼을 사용하기 위한 기본적인 설정이 끝났으니, 본격적으로 파워 플랫폼 애플리케이션을 개발할 차례입니다. 아래 중 하나를 선택해 파워 플랫폼 앱을 개발해 보세요!

* [파워 앱][pas]
* [파워 오토메이트][pau]
* [파워 버추얼 에이전트][pva]
* [파워 BI][pbi]



[image-01]: ../images/pp/pp-dev-setup-01.png
[image-02]: ../images/pp/pp-dev-setup-02.png
[image-03]: ../images/pp/pp-dev-setup-03.png
[image-04]: ../images/pp/pp-dev-setup-04.png
[image-05]: ../images/pp/pp-dev-setup-05.png
[image-06]: ../images/pp/pp-dev-setup-06.png


[pp]: https://powerplatform.microsoft.com/ko-kr/?WT.mc_id=power-34890-juyoo
[pp dev]: https://powerapps.microsoft.com/ko-kr/developerplan/?WT.mc_id=power-34890-juyoo
[pp dev regions]: https://docs.microsoft.com/ko-kr/power-platform/admin/regions-overview?WT.mc_id=power-34890-juyoo

[pas]: /pp/power-apps
[pau]: /pp/power-automate
[pva]: /pp/power-virtual-agents
[pbi]: /pp/power-bi

[m365 dev]: https://developer.microsoft.com/ko-kr/microsoft-365/dev-program?WT.mc_id=power-34890-juyoo
[m365 dev setup]: /m365/m365-dev-setup
