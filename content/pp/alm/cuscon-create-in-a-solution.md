---
title: ➕ 솔루션 안에서 사용자 지정 커넥터 만들기
description: 솔루션 안에서 사용자 지정 커넥터를 만들어 봅니다.
order: 1210
---

[파워 플랫폼][pp]에서 사용하기 위한 [사용자 지정 커넥터(커스텀 커넥터)][pp cons cus]를 만들어서 다른 [환경][pp env]에 적용시키고 싶다면, [솔루션 안에서 만들어야 합니다][pp cons cus sol].

> 이 글을 쓰는 현재, 솔루션 밖에서 이미 만들어 놓은 커스텀 커넥터는 솔루션 안으로 가지고 들어올 수 없습니다. 👉 [알려진 제약사항 참조][pp cons cus sol limitation]


## 새 솔루션 만들기 ##

커스텀 커넥터를 위한 새 솔루션을 우선 만들어 봅시다. 👉 [새 솔루션 만들기][pp sol new] 클릭!


## 커스텀 커넥터 만들기 ##

새 솔루션을 만들었다면 이제 솔루션 안에서 커스텀 커넥터를 만들어 봅시다.

1. 솔루션 안에서 `최신` 메뉴를 클릭하여 나오는 메뉴 중 `기타` ➡️ `사용자 지정 커넥터`를 선택합니다.
    ![커스텀 커넥터 추가][image-01]
    &nbsp;
2. 그 이후로는 일반적인 커스텀 커넥터를 만드는 방법과 동일합니다. 👉 [커스텀 커넥터 만들기][pp cons cus create] 클릭!

이제 솔루션 안에 커스텀 커넥터를 추가했습니다!


## 다음 순서 ##

솔루션 안에서 커스텀 커넥터를 만들어 봤다면, 이제 아래 중 하나를 선택해 진행해 보세요!

* 파워 앱에서 커스텀 커넥터 사용하기
* 파워 오토메이트에서 커스텀 커넥터 사용하기
* 솔루션 내보내기 (익스포트)
* 솔루션에 깃헙 액션으로 CI/CD 설정하기
* [솔루션 활용 베스트 프랙티스][pp sol bp]


[image-01]: ../../images/pp/alm/cuscon-create-in-a-solution-01.png
[image-02]: ../../images/pp/alm/cuscon-create-in-a-solution-02.png
[image-03]: ../../images/pp/alm/cuscon-create-in-a-solution-03.png
[image-04]: ../../images/pp/alm/cuscon-create-in-a-solution-04.png
[image-05]: ../../images/pp/alm/cuscon-create-in-a-solution-05.png


[pp]: https://powerplatform.microsoft.com/ko-kr/?WT.mc_id=power-34890-juyoo
[pp env]: https://docs.microsoft.com/ko-kr/power-platform/admin/environments-overview?WT.mc_id=power-34890-juyoo
[pp cons cus]: https://docs.microsoft.com/ko-kr/connectors/custom-connectors/?WT.mc_id=power-34890-juyoo
[pp cons cus sol]: https://docs.microsoft.com/ko-kr/connectors/custom-connectors/customconnectorssolutions?WT.mc_id=power-34890-juyoo
[pp cons cus sol limitation]: https://docs.microsoft.com/ko-kr/connectors/custom-connectors/customconnectorssolutions?WT.mc_id=power-34890-juyoo#known-limitations

[pp sol new]: /pp/alm/solution-new

[pp cons cus create]: /pp/cuscon/cuscon-create
[pp sol bp]: /pp/alm/solution-best-practices
