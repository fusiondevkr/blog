---
title: ➕ 솔루션 활용 베스트 프랙티스
description: 솔루션을 활용하기 위한 베스트 프랙티스에 대해 정리해 봅니다.
order: 1299
---

[파워 플랫폼][pp]에서 솔루션을 사용하다 보면 예상하지 못한 다양한 상황에 접하게 되는데요, 여기서 다양한 문제 상황들이 생길 수 있습니다. 이러한 문제 상황들이 생기는 경우의 수를 최소화하기 위해서는 여기 언급하는 베스트 프랙티스를 활용해 보면 좋습니다.


## 사용자 지정 커넥터(커스텀 커넥터) 전용 솔루션 사용 ##

커스텀 커넥터를 솔루션 안에서 만들 때 [알려진 제약 사항][pp cons cus sol limitation]이 있습니다. 이 제약사항을 극복하기 위해서는 커스텀 커넥터 전용 솔루션을 만들어 사용하는 것이 좋습니다. 커스텀 커넥터를 다른 환경에서 사용하기 위해서는 이를 사용하기 전에 별도로 등록하는 절차가 필요합니다. 아래 순서를 따라하세요.

> 여기서는 솔루션을 `DEV` 환경에서 `DEFAULT` 환경으로 이관한다고 가정합니다.

1. `DEV` 환경에서 커스텀 커넥터가 들어있는 솔루션을 퍼블리시한다. 👉 `모든 사용자 지정 항목 게시` 클릭
    ![모든 사용자 지정 항목 게시][image-01]
    &nbsp;
1. `DEV` 환경에서 커스텀 커넥터가 들어있는 솔루션을 익스포트한다. 👉 `내보내기` 클릭
    ![솔루션 내보내기][image-02]
    &nbsp;
1. `DEFAULT` 환경에서 커스텀 커넥터가 들어있는 솔루션을 임포트한다. 👉 `가져오기` 클릭
    ![솔루션 가져오기][image-03]
    &nbsp;
1. `DEFAULT` 환경에서 커스텀 커넥터를 열고 업데이트한다. 👉 `커넥터 업데이트` 클릭 💥 **중요** 💥
    ![커넥터 업데이트][image-04]
    &nbsp;

위와 같은 일련의 절차를 따르는 이유는 [알려진 제약 사항][pp cons cus sol limitation]에서 언급한 바와 같이 커스텀 커넥터를 우선적으로 등록시켜야만 이를 사용하는 다른 파워 플랫폼 애플리케이션을 사용할 수 있기 때문입니다.


## 솔루션 내 커넥션 레퍼런스 제외 ##

솔루션 안에서 파워 플랫폼 애플리케이션을 만들어 사용하다 보면 커넥션 레퍼런스가 항상 생기는데요, 이 커넥션 레퍼런스는 다른 환경으로 옮겨가면 사용할 수 없습니다. 따라서, 솔루션에 굳이 포함시킬 이유가 없으므로 솔루션을 퍼블리시하기 전에 삭제해 주면 좋습니다. 결국 아래 그림과 같이 파워 플랫폼 애플리케이션만 남아 있겠지요?

![솔루션 내에는 파워 플랫폼 애플리케이션만 넣어두면 좋다][image-05]
&nbsp;


## 다음 순서 ##

솔루션으로 다양한 활동을 할 수 있습니다. 이제 아래 중 하나를 선택해 진행해 보세요!

* 솔루션 내보내기 (익스포트)
* 솔루션 가져오기 (임포트)
* 솔루션에 깃헙 액션으로 CI/CD 설정하기


[image-01]: ../../images/pp/alm/solution-best-practices-01.png
[image-02]: ../../images/pp/alm/solution-best-practices-02.png
[image-03]: ../../images/pp/alm/solution-best-practices-03.png
[image-04]: ../../images/pp/alm/solution-best-practices-04.png
[image-05]: ../../images/pp/alm/solution-best-practices-05.png


[pp]: https://powerplatform.microsoft.com/ko-kr/?WT.mc_id=power-34890-juyoo
[pp cons cus]: https://docs.microsoft.com/ko-kr/connectors/custom-connectors/?WT.mc_id=power-34890-juyoo

[pp env]: https://docs.microsoft.com/ko-kr/power-platform/admin/environments-overview?WT.mc_id=power-34890-juyoo
[pp cons cus sol]: https://docs.microsoft.com/ko-kr/connectors/custom-connectors/customconnectorssolutions?WT.mc_id=power-34890-juyoo
[pp cons cus sol limitation]: https://docs.microsoft.com/ko-kr/connectors/custom-connectors/customconnectorssolutions?WT.mc_id=power-34890-juyoo#known-limitations

[pp cons cus create]: /pp/cuscon/cuscon-create
