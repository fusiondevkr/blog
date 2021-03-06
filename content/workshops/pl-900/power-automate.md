---
title: ➕ 파워 오토메이트 실습
description: 파워 오토메이트를 실습합니다.
order: 5106
---

앞서 [파워 앱][pas]을 이용해 굿즈 신청 화면까지 만들어 봤습니다. 파워 앱 안에서 신청 버튼을 탭할 경우 [파워 오토메이트][pau] 워크플로우를 실행시켜 굿즈 신청 승인 프로세스를 진행합니다. 여기서는 이 파워 오토메이트 워크플로우를 만들어 보겠습니다. 아래 그림은 이 실습이 끝난 후에 완성될 파워 오토메이트의 전체 모습입니다.

![파워 오토메이트 워크플로우][image-00]


## 사전 환경 설정 ##

좀 더 원활한 실습을 위해서는 아래와 같이 환경 설정을 해 두면 편합니다. 우측 상단의 기어 모양 아이콘을 클릭하면 나오는 "**모든 Power Automate 설정 보기**" 메뉴를 클릭한 후 아래와 같은 화면이 나오면 표시 언어를 "**한국어**"로, 실험적 기능을 "**설정**"으로 고정합니다.

![환경 설정][image-00-1]


## 파워 오토메이트 워크플로우 만들기 ##

1. 가장 먼저 비어있는 워크플로우를 만들어야 합니다. 아래 그림과 같이 왼쪽의 "**➕ 만들기**" 메뉴를 클릭해서 "**인스턴트 클라우드 흐름**"을 선택합니다.

    ![비어있는 인스턴트 클라우드 흐름 만들기][image-01]

2. 인스턴트 클라우드 흐름 작성 팝업 창이 뜨면 흐름 이름을 "**PL900GoodsFlow**"라고 적어주고, 그 아래 "**이 흐름의 트리거 방법 선택**"에서 "**PowerApps**"를 선택합니다. 이후 "**만들기**" 버튼을 클릭해서 다음 화면으로 넘어갑니다.

    ![파워 앱 트리거 선택][image-02]

3. 아래와 같이 비어있는 파워 오토메이트 워크플로우가 생겼습니다. "**➕ 새 단계**" 버튼을 클릭해서 액션을 추가합니다.

    ![비어있는 파워 오토메이트 워크플로우][image-03]

> **체크포인트**:
> 
> * [파워 오토메이트 생성 후](https://aka.ms/fdk/workshop/checkin/12)


## 응답 메시지 작성 ##

파워 앱에서 요청을 받고 나면 파워 오토메이트 워크플로우는 굿즈 신청 절차를 처리하기 시작합니다. 이 때 굿즈 신청 절차는 시간이 좀 걸리기 때문에, 파워 앱 쪽에 곧바로 응답 메시지를 던져주는 것이 좋습니다.

1. 아래와 같이 "**응답**" 액션을 추가합니다.

    ![응답 액션 선택][image-04]

2. 응답 액션의 "**상태 코드**", "**본문**"에 아래와 같이 입력합니다.
   * 상태 코드: `200`
   * 본문:

      ```json
      {
        "message": "굿즈 신청 처리중"
      }
      ```

    ![응답 액션 입력][image-05]

   "**응답 본문 JSON 스키마**"를 작성해 놓으면 파워 앱에서 응답 메시지의 형식에 대해 알려줄 수 있습니다. 스키마를 직접 작성하는 대신 위 그림과 같이 "**고급 옵션 표기**" 메뉴를 클릭합니다. 그러면 아래 그램과 같이 "**샘플에서 생성**" 버튼이 보이는데요, 이 버튼을 클릭해서 자동으로 생성할 수 도 있습니다.

    ![샘플에서 생성][image-05-1]

   "**샘플에서 생성**" 버튼을 클릭해서 나오는 팝업 창에 위의 본문을 입력하고 "**완료**" 버튼을 클릭합니다.

    ![샘플 JSON 페이로드 삽입][image-05-2]

   그러면 아래와 같이 자동적으로 "**응답 본문 JSON 스키마**" 값이 생성됩니다.

    ![응답 액션 및 응답 JSON 스키마][image-05-3]

3. 우측 상단의 "💾 저장" 버튼을 클릭해서 워크플로우를 저장합니다.

> **체크포인트**:
> 
> * [응답 메시지 액션 추가 후](https://aka.ms/fdk/workshop/checkin/13)


## 파워 앱 요청 데이터 전처리 ##

파워 앱에서 파워 오토메이트로 보내는 값은 굿즈 신청자의 이메일 주소, 굿즈 Item ID, 굿즈 수량, 이렇게 총 세 가지입니다. 이 데이터를 파워 오토메이트 워크플로우에서 사용하기 위해서 몇가지 전처리를 해야 할 부분이 있습니다. 아래와 같은 순서로 따라해 보세요.

1. 앞서 응답 액션 이후 추가하는 액션은 앞으로 사용할 데이터를 임시로 저장하는 변수입니다. 아래와 같이 "**변수**"의 "**변수 초기화**" 액션을 추가합니다. 파워 앱에서 보내는 값이 총 세 개이므로 총 세 개의 변수를 초기화합니다.

    ![변수 초기화 액션 선택 - 파워 앱 파라미터][image-06]

2. 아래와 같이 "**이름**"과 "**유형**" 필드 값을 설정합니다.

    * 변수 초기화
      * **이름**: `Email`
      * **유형**: `문자열`
    * 변수 초기화 2
      * **이름**: `ItemId`
      * **유형**: `정수`
    * 변수 초기화 3
      * **이름**: `Quantity`
      * **유형**: `정수`

    ![변수 초기화 항목 입력][image-07]

   이 때 마지막 "**값**" 필드는 초기값을 파워 앱에서 넘겨준 값으로 지정합니다. 이는 아래와 같이 **동적 값 삽입** 기능을 이용해서 "**PowerApps**"를 선택하고 "**PowerApps에서 질문**" 메뉴를 클릭하면 됩니다.

    ![파워 앱에서 질문][image-07-1]

   각각의 변수 초기화 액션에 적용하고 나면 아래와 같이 보입니다.

    ![파워 앱에서 변수 초기화 항목 입력][image-07-2]


> **체크포인트**:
> 
> * [요청 데이터 전처리 액션 추가 후](https://aka.ms/fdk/workshop/checkin/14)


## 굿즈 재고 확인 ##

1. 이후 위 그림의 "**➕ 새 단계**" 버튼을 클릭해서 다음 액션으로 "**SharePoint**"의 "**항목 가져오기(2개 이상)**"을 추가합니다.

    ![항목 가져오기(2개 이상) 액션 선택][image-15]

2. 아래와 같이 "**사이트 주소**" 필드에 "**Communication site**"를 선택합니다. 그러면 앞서 만들어 둔 Microsoft 리스트가 그 다음 "**목록 이름**" 필드에서 보이는데 그걸 다시 선택합니다. 마지막으로 맨 아래 "**고급 옵션 표시 ⌵**" 버튼을 클릭해서 액션을 확장합니다.

    ![항목 가져오기(2개 이상) 액션 필드값 입력 및 확장][image-16]

3. "**필터 쿼리**" 필드에서 "**Title**"을 선택하고 그 옆에는 "**같음**"을 선택합니다. 이후 "**값**" 항목을 클릭하면 나타나는 아이콘 두개 중 왼쪽의 "**동적 값 추가**"를 클릭합니다.

    ![항목 가져오기(2개 이상) 액션 필터 쿼리 입력 1][image-17]

4. 새로 나타나는 "**동적 값**" 팝업 창에서 "**변수**" 항목의 "**ItemId**" 값을 선택하세요.

    ![항목 가져오기(2개 이상) 액션 필터 쿼리 입력 2][image-18]

5. 조회한 항목을 저장하는 변수를 하나 설정합니다. "**변수**"의 "**변수 초기화**" 액션을 추가합니다.

    ![변수 초기화 액션 선택 - 항목 저장][image-06]

6. "**이름**"과 "**유형**"을 아래와 같이 설정합니다.

    * **이름**: `Item`
    * **유형**: `개체`
    * **값**: "**식 추가**" 버튼 클릭 후 `outputs('항목_가져오기(2개_이상)')?['body/value'][0]`

7. 우측 상단의 "💾 저장" 버튼을 클릭해서 워크플로우를 저장합니다.

> **체크포인트**:
> 
> * [굿즈 재고 확인 액션 추가 후](https://aka.ms/fdk/workshop/checkin/15)


## 굿즈 신청 승인 ##

이제 굿즈 아이템을 승인하는 워크플로우를 추가합니다.

1. 굿즈 신청 승인 여부를 저장하는 변수를 하나 설정합니다. "**변수**"의 "**변수 초기화**" 액션을 추가합니다.

    ![변수 초기화 액션 선택 - 승인 여부][image-06]

2. "**이름**"과 "**유형**"을 아래와 같이 설정합니다.

    * **이름**: `Approved`
    * **유형**: `부울`

3. 신청한 굿즈 항목이 부서장 승인이 필요하다면 부서장에게 승인 요청 이메일을 보내야 하므로 아래와 같이 "**조건**" 액션을 추가합니다.

    ![조건 액션 선택  - 부서장 승인][image-28]

4. 앞서 저장해 둔 `Item` 변수의 `NeedApproval` 값을 확인해서 이 값이 `true`일 경우 부서장 승인 요청 플로우를 거쳐야 하므로 아래와 같이 조건식을 작성합니다. 왼쪽의 "**값 선택**" 필드에 아래와 같은 식을 입력합니다.

    ```
    coalesce(variables('Item')?['NeedApproval'], false)
    ```

    그리고 가운데 선택 항목에서는 "**다음과 같음**"을 선택하고, 오른쪽의 값 선택 필드에는 "**true**"를 입력합니다.

    ![조건 액션 조건식 입력][image-29]

5. 조건식이 참일 경우에만 부서장 승인 요청 이메일을 보내면 되므로 왼쪽의 "**예인 경우**" 분기 쪽에 "**Office 365 Outlook**"의 "**옵션과 함께 전자 메일 보내기**" 액션을 추가합니다.

    ![옵션과 함께 전자 메일 보내기 액션 선택][image-30]

6. "**받는 사람**" 필드에는 부서장 페르소나인 문정연씨 이름을 검색해서 추가하고, 아래 그림과 같이 항목을 입력합니다. 이 때 "**본문**" 필드를 클릭해서 나오는 "**식 추가**" 아이콘을 클릭해서 아래와 같은 식을 입력하면 됩니다.

    * **제목**: `굿즈 승인 요청`
    * **사용자 옵션**: `승인,거절`
    * **본문**: `concat(variables('Item')?['ItemName'], ' ', variables('Item')?['ItemPrice'], ' ', variables('Quantity'))`
    * **중요도**: `Normal`

    ![옵션과 함께 전자 메일 보내기 액션 필드 입력][image-31]

7. 부서장 승인 결과에 따라 앞서 설정했던 "**Approved**" 변수값을 변경해야 합니다. 아래와 같이 "**변수**"의 "**변수 설정**" 액션을 추가합니다.

    ![변수 설정 액션 선택 - 승인 여부][image-32]

8. "**이름**" 필드와 "**값**" 필드에 아래와 같이 입력합니다.

    * **이름**: `Approved`
    * **값**: `equals(outputs('옵션과_함께_전자_메일_보내기')?['body/SelectedOption'], '승인')`

9. 같은 식으로 "**아니요인 경우**" 분기 쪽에도 "**변수**"의 "**변수 설정**" 액션을 추가합니다.

    ![변수 설정 액션 선택 - 무조건 승인][image-32]

10. 이번에는 "**이름**" 필드와 "**값**" 필드에 아래와 같이 입력합니다.

    * **이름**: `Approved`
    * **값**: `true`

11. 우측 상단의 "💾 저장" 버튼을 클릭해서 워크플로우를 저장합니다.

12. 부서장 승인 절차가 끝난 후에는 승인 결과에 따라 신청자에게 승인 혹은 거절 이메일을 보내고 재고 현황도 업데이트해야 하므로 다시 한 번 "**조건**" 액션을 추가합니다.

    ![조건 액션 선택 - 승인후 처리][image-28]

13. 이번 조건식에서는 부서장 승인 결과 값을 기반으로 작성하므로, 왼쪽의 "**값 선택**" 필드에는 "**변수**" 항목의 "**Approved**"을 선택하고, 가운데 필드에는 "**다음과 같음**", 오른쪽 필드에는 "**true**" 값을 입력합니다.

    ![조건 액션 조건식 필드 입력][image-33]

14. 부서장 승인이 나지 않았을 경우를 먼저 처리합니다. 아래와 같이 "**아니오인 경우**" 분기에서 "**Office 365 Outlook**"의 "**메일 보내기(V2)**" 액션을 추가합니다.

    ![메일 보내기(V2) 액션 선택 1][image-34]

15. "**받는 사람**" 필드에는 굿즈 신청자 이메일을 입력합니다. "**식 추가**" 아이콘을 클릭한 후 나오는 팝업 창에서 아래와 같이 식을 입력합니다.

    ```
    variables('Email')
    ```

    다른 필드 역시 아래와 같이 입력합니다.

    * **제목**: `굿즈 승인이 나지 않았습니다`
    * **본문**: `미안~`

    ![메일 보내기(V2) 액션 필드값 입력][image-35]

16. "**고급 옵션 표시**" 항목을 클릭해서 "**중요도**" 필드값을 "**Normal**"로 설정합니다.

    ![메일 보내기(V2) 액션 중요도 값 확인][image-36]

17. 같은 방식으로 부서장 승인이 났을 경우 "**예인 경우**" 분기 쪽에서 "**Office 365 Outlook**"의 "**메일 보내기(V2)**" 액션을 추가합니다.

    ![메일 보내기(V2) 액션 선택 2][image-34]

18. 위와 같은 방식으로 아래와 같이 필드값을 입력합니다.

    * **받는 사람**: `variables('Email')`
    * **제목**: `승인 났숑!`
    * **본문**: `ㅊㅋㅊㅋㅊㅋ`
    * **중요도**: `Normal`

19. 우측 상단의 "💾 저장" 버튼을 클릭해서 워크플로우를 저장합니다.

> **체크포인트**:
> 
> * [굿즈 신청 승인 액션 추가 후](https://aka.ms/fdk/workshop/checkin/16)


## 굿즈 신청 승인 후 잔여 수량 업데이트 ##

위의 조건 액션에서 "**예인 경우**" 분기 쪽에서는 굿즈 신청 승인 이메일을 보낸 후 굿즈의 잔여 수량도 업데이트해야 합니다.

1. 잔여 수량 계산을 위해 "**데이터 작업**"의 "**작성**" 액션을 추가합니다.

    ![작성 액션 선택][image-39]

2. "**입력**" 필드에는 "**식 추가**" 아이콘을 클릭해서 아래 식을 입력합니다. 이 때, 아래 식의 `variables('Item')?['Quantity']` 부분에서 `Quantity` 대신 `field_quantity`가 될 수도 있고, 다른 무언가가 될 수도 있습니다. 이 값을 정확하게 확인하려면 앞에서 설정한 굿즈 재고 확인 단계에서 "**항목 가져오기(2개 이상)**" 액션을 참고해 보세요.

    ````
    sub(variables('Item')?['Quantity'], variables('Quantity'))
    ````

    ![작성 액션 입력][image-40]

3. 위의 액션을 통해 잔여 수량을 계산해 냈으므로 아래와 같이 "**SharePoint**"의 "**항목 업데이트**" 액션을 추가합니다.

    ![항목 업데이트 액션 선택][image-41]

4. "**사이트 주소**"와 "**목록 이름**"을 선택하고, "**ID**"와 "**Quantity**", "**NeedApproval**" 필드에 아래와 같이 입력합니다.

    * **ID**: `variables('Item')?['ID']`
    * **Quantity**: `if(greater(outputs('작성'), 0), outputs('작성'), 0)`
    * **NeedApproval**: `coalesce(variables('Item')?['NeedApproval'], false)`

    ![항목 업데이트 액션 필드값 입력][image-42]

5. 우측 상단의 "💾 저장" 버튼을 클릭해서 워크플로우를 저장합니다.

> **체크포인트**:
> 
> * [굿즈 승인 후 잔여 수량 업데이트 액션 추가 후](https://aka.ms/fdk/workshop/checkin/17)


## 배송 API 호출 ##

굿즈 신청 승인 절차는 다 끝났고, 이제 굿즈 신청 물량을 배송 업체에 넘겨서 처리하는 절차가 남았습니다. 배송 API와 관련한 커넥터는 파워 오토메이트에서 제공해주지 않으므로 커스텀 커넥터를 이용해서 호출해야 합니다. 브라우저 새 탭을 열고 [파워 오토메이트][pau] 사이트에 다시 접속합니다.

1. 아래와 같이 화면 왼쪽의 "**사용자 지정 커넥터**" 메뉴를 클릭합니다.

    ![사용자 지정 커넥터 메뉴 선택][image-45]

2. 우측 상단의 "**➕ 새 사용자 지정 커넥터**" 메뉴를 클릭해서 "**URL에서 OpenAPI 가져오기**" 메뉴를 선택합니다.

    ![사용자 지정 커넥터 만들기 메뉴 선택][image-46]

3. "**URL에서 OpenAPI 가져오기**" 팝업 창이 나타나면 "**커넥터 이름**" 필드와 "**공개 API의 URL에 붙여넣기**" 필드에 아래 값을 입력합니다.

    * **커넥터 이름**: `PL900Logistics`
    * **공개 API의 URL에 붙여넣기**: `https://fncapp-fusiondevkr-lgi-krc.azurewebsites.net/api/openapi/v2.json`

    이후 "**가져오기**" 버튼을 클릭한 후, "**계속**" 버튼이 파란색으로 활성화되면, 클릭해서 다음 화면으로 넘어갑니다.

    ![URL에서 OpenAPI 가져오기][image-47]

4. 우측 상단의 "**✔️ 커넥터 만들기**" 버튼을 클릭하면 커스텀 커넥터 만들기가 끝납니다.

    ![커스텀 커넥터 만들기 버튼][image-48]

5. 다시 커스텀 커넥터 리스트 화면으로 돌아가 보면 방금 만든 "**PL900Logistics**" 커스텀 커넥터가 보입니다. 동작 컬럼 밑에 있는 "**➕**" 버튼을 클릭해서 커넥션을 만듭니다.

    ![Logistics 커스텀 커넥터][image-49]

6. API 키 값을 입력하고 "**연결 만들기**" 버튼을 클릭합니다. 이 실습에서 사용할 API 키 값은 아래와 같습니다.

    ```
    Hands-0n_Work$hop
    ```

    ![커스텀 커넥터 연결 만들기][image-50]

7. 아래와 같이 커스텀 커넥터 연결이 만들어 진 것을 확인합니다.

    ![커스텀 커넥터 연결][image-51]

8. 굿즈 신청 워크플로우는 여러 사람이 함께 사용하기 떄문에 여기서 사용하는 커스텀 커넥터 연결 역시도 공유해야 합니다. 연결 옆의 "**...** (추가 명령)" 버튼을 클릭해서 "**공유**" 메뉴를 클릭합니다.

    ![커스텀 커넥터 공유][image-52]

9. "**이름, 전자 메일 주소 또는 사용자 그룹 입력**" 필드에 "**PL900SecurityGroup**"을 입력해서 그룹을 추가합니다. 이 그룹에 대해 사용 권한을 "**사용 가능**"으로 설정한 후 "**저장**" 버튼을 클릭합니다.

    ![커스텀 커넥터 시큐리티 그룹 추가][image-53]

10. 파워 오토메이트 워크플로우로 돌아가서 새 액션을 추가합니다. "**logistics**"로 검색하면 방금 만든 커스텀 커넥터가 보입니다. "**Run shipping queue**" 액션을 추가합니다.

    ![Run shipping queue 액션 선택][image-54]

11. 아래의 내용과 같이 "**name**", "**email**", "**address**", "**items**" 필드에 각각 입력합니다.

    * **name**: `김온유`
    * **email**: `variables('Email')`
    * **address**: `서울 종로구 종로1길 50`
    * **items name - 1**: `variables('ItemId')`
    * **items quantity - 1**: `variables('Quantity')`

    ![Run shipping queue 액션 항목 입력][image-55]


12. 우측 상단의 "💾 저장" 버튼을 클릭해서 워크플로우를 저장합니다.

> **체크포인트**:
> 
> * [배송 API 호출 액션 추가 후](https://aka.ms/fdk/workshop/checkin/18)


## 파워 오토메이트 워크플로우 테스트 ##

이제 지금까지 만들었던 굿즈 신청을 위한 워크플로우를 테스트 해 보겠습니다.

1. 우측 상단의 "**테스트**" 버튼을 클릭합니다.

    ![테스트 버튼][image-58]

2. "**흐름 테스트**" 메뉴에서 "**수동**"을 선택하고, "**테스트**" 버튼을 클릭합니다.

    ![흐름 테스트][image-59]

3. 이 워크플로우 실행에 쓰일 연결을 확인합니다. 아래 "**계속**" 버튼을 눌러 진행합니다.

    ![연결 로그인 확인][image-60]

4. "**변수초기화_값**", "**변수초기화2_값**", "**변수초기화3_값**" 필드 각각에 테스트 데이터를 입력합니다. 아래 테스트 데이터를 입력해 보세요. 그리고 "**흐름 실행**" 버튼을 클릭합니다. 이 때 "**email**" 값은 김온유의 페르소나에 해당하는 이메일 주소입니다. 여기서는 `onyu.kim@<테넌트이름>.onmicrosoft.com`라고 임의로 지정했습니다.

    * **변수초기화_값**: `onyu.kim@<테넌트이름>.onmicrosoft.com`
    * **변수초기화2_값**: `1`
    * **변수초기화3_값**: `30`

    ![흐름 실행][image-61]

5. 파워 오토메이트 워크플로우 테스트가 끝났습니다. "**완료**" 버튼을 클릭해서 실행 결과를 알아보세요.

    ![흐름 실행 완료][image-62]

6. 굿즈 신청 항목 중 하나 이상이 부서장 승인이 필요한 모양입니다. 현재 부서장인 문정연씨에게 확인 이메일이 갔네요. 부서장 승인 여부를 기다리고 있습니다.

    ![부서장 승인 대기중][image-63]

7. 부서장 페르소나인 문정연씨 프로필로 웹 브라우저를 열어 이메일을 확인해 보니 아래와 같은 이메일이 도착했습니다. 신청한 굿즈 중 "미니여행가방"이 부서장 승인이 필요한 아이템이 맞았습니다. 이메일의 "**승인**" 버튼을 클릭합니다.

    ![부서장 승인 요청 이메일][image-64]

8. 승인 버튼을 누르고 나면 이메일이 아래와 같이 바뀝니다.

    ![부서장 승인 결과][image-65]

9. 승인 후 다시 파워 오토메이트 워크플로우로 돌아와서 결과를 확인해 봅니다. 워크플로우가 성공적으로 실행되었습니다.

    ![워크플로우 실행 성공][image-66]

10. 이제 가맹점장의 페르소나인 김온유씨 이메일을 열어볼까요? 승인 결과 이메일이 도착한 것이 보입니다.

    ![승인 이메일][image-67]


이렇게 해서 [파워 오토메이트][pau]로 굿즈 신청 프로세스를 작성해 봤습니다. 이제 이 파워 오토메이트 워크플로우를 [파워 앱][pas]에 적용시켜 보겠습니다.

> **체크포인트**:
> 
> * [파워 오토메이트 워크플로우 테스트 후](https://aka.ms/fdk/workshop/checkin/19)

## 다음 순서 ##

1. 배경 설명
2. M365 개발자 테넌트 및 추가 계정 생성
3. 웹 브라우저 프로필 구성
<!-- 4. M365 개발자 계정 등록 -->
5. SharePoint에서 리스트 만들기
6. 파워 앱 실습 #1
7. 파워 오토메이트 실습
8. [파워 앱 실습 #2][handson pas 2] 👈


[image-00]: ../../images/workshops/power-automate-00.png
[image-00-1]: ../../images/workshops/power-automate-00-1.png
[image-01]: ../../images/workshops/power-automate-01.png
[image-02]: ../../images/workshops/power-automate-02.png
[image-03]: ../../images/workshops/power-automate-03.png
[image-04]: ../../images/workshops/power-automate-04.png
[image-05]: ../../images/workshops/power-automate-05.png
[image-05-1]: ../../images/workshops/power-automate-05-1.png
[image-05-2]: ../../images/workshops/power-automate-05-2.png
[image-05-3]: ../../images/workshops/power-automate-05-3.png
[image-06]: ../../images/workshops/power-automate-06.png
[image-07]: ../../images/workshops/power-automate-07.png
[image-07-1]: ../../images/workshops/power-automate-07-1.png
[image-07-2]: ../../images/workshops/power-automate-07-2.png
[image-08]: ../../images/workshops/power-automate-08.png
[image-09]: ../../images/workshops/power-automate-09.png
[image-10]: ../../images/workshops/power-automate-10.png
[image-11]: ../../images/workshops/power-automate-11.png
[image-12]: ../../images/workshops/power-automate-12.png
[image-13]: ../../images/workshops/power-automate-13.png
[image-14]: ../../images/workshops/power-automate-14.png
[image-15]: ../../images/workshops/power-automate-15.png
[image-16]: ../../images/workshops/power-automate-16.png
[image-17]: ../../images/workshops/power-automate-17.png
[image-18]: ../../images/workshops/power-automate-18.png
[image-19]: ../../images/workshops/power-automate-19.png
[image-20]: ../../images/workshops/power-automate-20.png
[image-21]: ../../images/workshops/power-automate-21.png
[image-22]: ../../images/workshops/power-automate-22.png
[image-23]: ../../images/workshops/power-automate-23.png
[image-24]: ../../images/workshops/power-automate-24.png
[image-25]: ../../images/workshops/power-automate-25.png
[image-26]: ../../images/workshops/power-automate-26.png
[image-27]: ../../images/workshops/power-automate-27.png
[image-28]: ../../images/workshops/power-automate-28.png
[image-29]: ../../images/workshops/power-automate-29.png
[image-30]: ../../images/workshops/power-automate-30.png
[image-31]: ../../images/workshops/power-automate-31.png
[image-32]: ../../images/workshops/power-automate-32.png
[image-33]: ../../images/workshops/power-automate-33.png
[image-34]: ../../images/workshops/power-automate-34.png
[image-35]: ../../images/workshops/power-automate-35.png
[image-36]: ../../images/workshops/power-automate-36.png
[image-37]: ../../images/workshops/power-automate-37.png
[image-38]: ../../images/workshops/power-automate-38.png
[image-39]: ../../images/workshops/power-automate-39.png
[image-40]: ../../images/workshops/power-automate-40.png
[image-41]: ../../images/workshops/power-automate-41.png
[image-42]: ../../images/workshops/power-automate-42.png
[image-43]: ../../images/workshops/power-automate-43.png
[image-44]: ../../images/workshops/power-automate-44.png
[image-45]: ../../images/workshops/power-automate-45.png
[image-46]: ../../images/workshops/power-automate-46.png
[image-47]: ../../images/workshops/power-automate-47.png
[image-48]: ../../images/workshops/power-automate-48.png
[image-49]: ../../images/workshops/power-automate-49.png
[image-50]: ../../images/workshops/power-automate-50.png
[image-51]: ../../images/workshops/power-automate-51.png
[image-52]: ../../images/workshops/power-automate-52.png
[image-53]: ../../images/workshops/power-automate-53.png
[image-54]: ../../images/workshops/power-automate-54.png
[image-55]: ../../images/workshops/power-automate-55.png
[image-56]: ../../images/workshops/power-automate-56.png
[image-57]: ../../images/workshops/power-automate-57.png
[image-58]: ../../images/workshops/power-automate-58.png
[image-59]: ../../images/workshops/power-automate-59.png
[image-60]: ../../images/workshops/power-automate-60.png
[image-61]: ../../images/workshops/power-automate-61.png
[image-62]: ../../images/workshops/power-automate-62.png
[image-63]: ../../images/workshops/power-automate-63.png
[image-64]: ../../images/workshops/power-automate-64.png
[image-65]: ../../images/workshops/power-automate-65.png
[image-66]: ../../images/workshops/power-automate-66.png
[image-67]: ../../images/workshops/power-automate-67.png


[pas]: https://powerapps.microsoft.com/ko-kr/?WT.mc_id=power-34890-juyoo
[pau]: https://flow.microsoft.com/ko-kr/?WT.mc_id=power-34890-juyoo

[handson background]: ../background
[handson m365 create]: ../m365-account-setup
[handson browser profile]: ../web-browser-setup
[handson m365 rego]: ../m365-account-registration
[handson m365 list]: ../m365-list
[handson pas 1]: ../power-apps-1
[handson pau]: ../power-automate
[handson pas 2]: ../power-apps-2
