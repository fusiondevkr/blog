---
title: ➕ 사용자 지정 커넥터 만들기
description: 파워 플랫폼 전반에 걸쳐 공통적으로 쓰이는 사용자 지정 커넥터를 만들어 봅니다.
order: 1101
---

[파워 플랫폼][pp]은 다른 시스템에 연결해서 데이터 혹은 메시지를 교환하기 위해 [커넥터][pp cons]를 사용합니다. 커넥터는 기본적으로 API의 프록시 혹은 래퍼 형태로 작동합니다. 마이크로소프트에서 자체 제공하는 커넥터의 수는 [수백개 이상으로 굉장히 많아서][pp cons ref] 대부분의 SaaS 솔루션에 연결할 수 있습니다. 하지만, 내 조직 내부적으로 사용하는 API의 경우에는 커넥터를 제공하지 않으므로, 직접 커넥터를 만들어야 합니다. 이를 가리켜 [사용자 지정 커넥터(커스텀 커넥터)][pp cons cus]라고 합니다. 여기서는 다양한 방법으로 커스텀 커넥터를 만드는 방법에 대해 알아봅니다.


## 애저 서비스&ndash;API 매니저, 애저 펑션, 로직 앱&ndash;를 이용해 만들기 ##

TBD


## OpenAPI 문서 파일을 이용해 만들기 ##

TBD


## OpenAPI 문서 URL을 이용해 만들기 ##

TBD


## Postman 컬렉션을 이용해 만들기 ##

[Postman 컬렉션에서 사용자 지정 커넥터 만들기][pp cons cus postman] 페이지를 참조하세요.


## 다음 순서 ##

커스텀 커넥터를 만들어 봤다면, 이제 아래 중 하나를 선택해 진행해 보세요!

* [솔루션 안에서 커스텀 커넥터 만들기][pp cons cus sol]
* 파워 앱에서 커스텀 커넥터 사용하기
* 파워 오토메이트에서 커스텀 커넥터 사용하기


[pp]: https://powerplatform.microsoft.com/ko-kr/?WT.mc_id=power-34890-juyoo
[pp cons]: https://docs.microsoft.com/ko-kr/connectors/connectors?WT.mc_id=power-34890-juyoo
[pp cons ref]: https://docs.microsoft.com/ko-kr/connectors/connector-reference/?WT.mc_id=power-34890-juyoo
[pp cons cus]: https://docs.microsoft.com/ko-kr/connectors/custom-connectors/?WT.mc_id=power-34890-juyoo
[pp cons cus postman]: https://docs.microsoft.com/ko-kr/connectors/custom-connectors/define-postman-collection?WT.mc_id=power-34890-juyoo

[pp cons cus sol]: /pp/alm/cuscon-create-in-a-solution
