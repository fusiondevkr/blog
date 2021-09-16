---
title: ➕ 파워 앱 실습 1
description: 파워 앱을 실습합니다.
order: 5105
---

마케팅 담당자인 안지민씨는 앞서 만들어 놓은 Microsoft 리스트를 기반으로 굿즈 재고를 관리하고 가맹점에서 굿즈 신청절차를 손쉽게 하기 위해 [파워 앱][pas]을 만들기로 했습니다.


## 파워 앱 생성 ##

1. [파워 앱 포털][pas]로 로그인 합니다. 로그인 계정을 프로필에서 확인합니다. 협업과 솔루션 개발을 위하여 환경을 "**default**" 환경으로 설정합니다. 메뉴바에서 "**+만들기**"를 선택 후 "**데이터로 시작**"에 있는 "**SharePoint**"를 선택합니다.

    ![파워 앱스 로그인][image-01]

2. 연결에서 SharePoint를 선택하고 최근에 이용한 사이트에서 원하는 공용 사이트를 선택 후 목록을 선택하고 연결합니다.

    ![파워 앱을 SharePoint연결][image-02]

3. SharePoint 리스트에 있는 데이터를 파워 앱에 동기화 하여 자동으로 앱이 생성되었습니다.

    ![파워 앱 생성][image-03]


## 굿즈 조회 화면 ##

굿즈 재고를 조회하는 화면을 먼저 만들어 봅니다.

1. "**BrowseGallery1**" 컨트롤에 속한 "**Title1**"의 "**Text**" 속성을 선택합니다. "**Fx**"를 `ThisItem.ItemName`으로 설정합니다.

    ```
    ThisItem.ItemName
    ```

    ![굿즈 조회 화면 편집1][image-04]
 
2. "**BrowseGallery1**" 컨트롤에 속한 "**Subtitle1**"의 "**Text**" 속성을 선택합니다. "**Fx**"를 아래와 같이 설정합니다.

    ```
    "승인필요: " & ThisItem.NeedApproval
    ```

    "**BrowseGallery1**" 컨트롤에 속한 "**Body1**"의 "**Text**" 속성을 선택합니다. "**Fx**"를 아래와 같이 설정합니다.

    ```
    "가격: " & ThisItem.ItemPrice & "원"
    ```

    ![굿즈 조회 화면 편집2][image-05]

3. "**Body1**"이 선택된 상태에서 복사, 붙여넣기를 합니다. "**Body1_1**"이 생성됩니다.  "**Body1_1**"의 "**Text**" 속성을 선택합니다. "**Fx**"를 아래와 같이 설정합니다.

    ```
    "재고: " & ThisItem.Quantity & "개"
    ```

    ![굿즈 조회 화면 편집3][image-06]

4. "**IconNewItem**" 아이콘은 현재 프로세스에서는 불필요 하므로 비활성화 합니다. "**IconNewItem**" 아이콘을 선택 후 "**Visible**"속성에서 "**Fx**"를 `false`로 입력합니다.

    ![굿즈 조회 화면 편집4][image-07]

5. 그리고 "**주문**" 버튼을 생성하여 버튼 클릭시 **재고 주문 화면**으로 전환되는 설정을 할 예정입니다. 먼저 "**BrowseGallery1**"의 사이즈를 줄여 공간 확보 후 메뉴에서 "**삽입**"을 선택하여 버튼을 생성합니다. 오른쪽 속성창에서 "**텍스트**" 속성에 **주문**을 입력합니다. "**Button1**"의 OnSelect 속성창에서 컬렉션을 생성하고 리프레시하는 **ClearCollect 함수**를 "**Fx**"에 아래와 같이 입력합니다.

    ```
    ClearCollect(List, [@'굿즈 리스트'])
    ```

    ![굿즈 조회 화면 편집5][image-08]

6. `List`라는 이름의 컬렉션이 생성됩니다. **보기**메뉴에서 **컬렉션**을 클릭하면 아래와 같은 컬렉션이 보입니다.

    ![굿즈 조회 화면 편집6][image-09]

7. 굿즈 상세 화면인 **DetailScreen1**에서 "**IconEdit1**"아이콘은 이 앱의 관리자가 아니면 보이지 않게 설정하고 "**IconDelete1**"아이콘은 비활성화 하겠습니다. "**IconEdit1**" 아이콘을 선택 후 "**Visible**"속성에서 "**Fx**"를 아래와 같이 변경합니다. 여기서 이메일은 앱 관리자의 이메일 주소를 넣어야 합니다. 여기서는 마케팅 담당자 페르소나인 안지민씨 이메일 주소가 됩니다.

    ```
    If(User().Email = "jimin.ahn@<테넌트이름>.onmicrosoft.com", true, false)
    ```

    "**IconDelete1**" 아이콘을 선택 후 "**Visible**"속성에서 "**Fx**"를 **false**로 변경합니다.

    ![굿즈 조회 화면 편집7][image-10]

8. "**DetailScreen1**" 화면에서 필드를 편집하여 사용자가 더 이해하기 쉽도록 변경하겠습니다. "**DetailScreen1**"의 "**EditForm1**"을 선택 후 속성창의 "**필드 편집**"을 클릭하면 "**필드**" 창이 나타납니다. "**NeedApproval**"필드에서 "**컨트롤 형식**"을 "**텍스트 보기**"로 변경하면 앱 화면의 "**NeedApproval**"의 데이터카드 내용이 `false`로 변경됩니다.

    ![굿즈 조회 화면 편집8][image-11]


## 굿즈 수정 화면 ##

마케팅 담당자 안지민씨는 이 앱의 관리 주체로서 굿즈 재고 리스트 앱의 모든 화면에 접근할 수 있어야 합니다. 따라서 수량 변경 화면인 "**EditScreen1**"는 안지민씨만 볼 수 있게 설정하겠습니다. 안지민씨 이외의 다른 사용자는 이 "**EditScreen1**" 화면을 볼 수 없고 이 화면과 연결된 아이콘 모두 볼 수 없게 설정하겠습니다.

1. 트리뷰에서 "**EditScreen**"을 선택 후 `OnVisible`속성을 선택하고 "**Fx**"를 아래와 같이 입력합니다. 여기서는 마케팅 담당자 페르소나인 안지민씨 이메일 주소가 됩니다.

    ```
    If(User().Email = "jimin.ahn@<테넌트이름>.onmicrosoft.com", true, false)
    ```

    ![굿즈 수정 화면1][image-12]

2. "**EditScreen1**" 화면에서 굿즈 수량만 변경할 수 있게 설정하고 필요 없는 필드는 제거하겠습니다. "**EditScreen1**" 화면의 "**EditForm1**"을 선택합니다. 오른쪽 "**속성**"창에서 "**필드 편집**"을 클릭하면 "**필드**" 창이 나타납니다. "**필드**"창에서 Attachments의 "**…**"을 선택하여 드랍다운을 엽니다. "**X제거**"를 클릭하여 Attachments 필드를 제거합니다.

    ![굿즈 수정 화면2][image-13]

3. 이전과 같이 "**EditScreen1**" 화면의 "**EditForm1**"을 선택합니다. 오른쪽 "**속성**"창에서 "**필드 편집**"을 클릭하면 "**필드**" 창이 나타납니다. "**Quantity**"필드를 제외한 모든 필드의 "**컨트롤 형식**"에서 "**텍스트 보기**"로 변경합니다.

    ![굿즈 수정 화면3][image-14]


## 굿즈 신청 화면 ##

굿즈 신청 화면에서는 앱 사용자가 굿즈의 아이템 카테고리를 선택하고 개수를 입력합니다.

1. "**새화면**"의 "**비어있음**"을 클릭하면 "**Screen1**"이름의 새 화면이 생성됩니다. "**레이블**"을 클릭하여 "**Label1**"을 생성 후 "**텍스트**"에서 **주문입력**으로 변경하고 속성창에서 레이블의 바탕색을 설정합니다. "**레이블**"을 두 번 더 클릭하여 "**Lable2**"와 "**Label3**"를 만들고 "**Label2**"의 텍스트 속성을 **주문 아이템**, "**Label3**"의 텍스트 속성을 **개수**로 입력합니다.

    ![굿즈 신청 화면1][image-15]

2. 삽입 메뉴에서 "**입력**"에서 "**드롭다운**"을 클릭합니다. "**Dropdown1**"컨트롤이 생성되는데 "**Items**"속성창에서 "**Fx**"를 아래와 같이 변경합니다. 그 후 2개의 드롭다운을 더 생성 후 아래의 소스코드와 같이 변경합니다.

    ```
    List.ItemName
    ```

    삽입 메뉴에서 "**텍스트**"에서 "**텍스트 입력**"을 선택하여 "**TextInput1**"을 생성합니다.  2개를 더 생성하여 총 3개의 입력창을 생성합니다.

    ![굿즈 신청 화면2][image-16]

3. 삽입메뉴에서 버튼를 클릭하여 생성합니다. 버튼의 텍스트 속성에서 **초기화**라고 입력하고 **초기화**버튼를 선택한 상태에서 "**OnSelect**"속성의 "**Fx**"를 아래와 같이 입력합니다.

    ```
    Reset(Dropdown1);
    Reset(Dropdown2);
    Reset(Dropdown3);
    Reset(TextInput1);
    Reset(TextInput2);
    Reset(TextInput3)
    ```

    ![굿즈 신청 화면3][image-17]

4. 화면 연결을 위하여 "**BrowseScreen1**"화면으로 이동합니다. "**Button1**"이 선택된 상태에서 "**OnSelect**" 속성의 "**Fx**"에 아래의 함수를 추가하여 업데이트 합니다. **Navigate함수**는 스크린 화면을 연결하여 버튼을 클릭하였을 때 화면이 전환되는 효과를 나타냅니다.

    ```
    ClearCollect(List, [@'굿즈 리스트']);
    Navigate(Screen1)
    ```

    ![굿즈 신청 화면4][image-18]

5. 중간저장을 위하여 **파일**탭으로 들어가서 이름을 입력하고 "**저장**"버튼을 클릭합니다.

    ![굿즈 신청 화면5][image-19]


## 사용자 지정 커넥터 만들기 &ndash; 체크포인트 확인용 ##

여기까지 파워 앱을 다 만들었다면, 체크포인트에 체크인을 해야 합니다. "**체크포인트**" 버튼를 설정하여 메시지를 전달하는 프로세스를 만들어야 합니다. 프로세스를 만들려면 전문개발자가 만든 API를 사용하여 사용자 지정 커넥터 (커스텀 커넥터)를 만들고 파워 앱에 연결 후 사용할 수 있습니다.

1. API 정보를 가져와서 파워 앱에서 **사용자 지정 커넥터**를 생성하겠습니다. 파워 앱 홈페이지의 메뉴바에서 "**Dataverse**" (또는 데이터)를 클릭하여 드롭다운을 열고 "**사용자 지정 커넥터**"를 클릭합니다. 오른쪽 상단의 "**+새 사용자 지정 커넥터**" 드롭다운을 열고 "**URL에서 OpenAPI 가져오기**"를 선택합니다.

    ![사용자 지정 커넥터 1][image-20]

2. 커넥터 이름을 입력하고 아래 URL API주소를 **CustomConnector.txt**파일에서 **체크포인트 URL**을 복사, 붙여 넣기 합니다. "**가져오기**"한 후 "**계속**"을 클릭합니다.

    ```
    https://fncapp-fusiondevkr-cph-krc.azurewebsites.net/api/openapi/v2.json
    ```

    ![사용자 지정 커넥터 2][image-21]

3. **사용자 지정 커넥터**의 생성 단계인 일반, 보안, 정의, 코드가 자동으로 설정됩니다. 여기서 오른쪽 상단의 "**커넥터 만들기**"를 클릭하여 저장합니다. 그 후 "**5. 테스트**"를 클릭합니다.

    ![사용자 지정 커넥터 3][image-22]

4. **테스트 작업**에서 "**+새 연결**"을 클릭하면 방금 생성된 사용자 지정 커넥터를 API에 연결하기 위한 화면이 나옵니다. 아래 API Key 값을 **API 키** 입력창에 붙여 넣기 합니다.

    ```
    Hands-0n_Work$hop
    ```

    ![사용자 지정 커넥터 4][image-23]

5. 그 후 화면이 **Dataverse**(또는 데이터)의 **연결**화면으로 전환됩니다. 이것은 사용자 지정 커넥터가 연결되어 업데이트 되었음을 의미합니다. 여기서 중요한 점은 **사용자 지정 커넥터**도 파워 앱을 사용할 사용자 모두에게 공유되어야 합니다. 방금 생성된 사용자 지정 커넥터의 "**…**" 옵션버튼을 눌러 "**공유**" 버튼을 클릭합니다. Microsoft 365 개발자 테넌트를 설정하면서 만들어 놓은 "**PL900SecurityGroup**" 보안 그룹을 검색해서 입력하고 **사용 권한**을 설정 후 저장합니다.

    ![사용자 지정 커넥터 5][image-24]

6. 네비게이션 바의 **사용자 지정 커넥터**에서 생성된 **PL900CheckPoint** 연결을 테스트하기 위해 "**편집**"버튼을 클릭합니다. 아래와 같이 화면이 나오면 "**5. 테스트**"를 클릭합니다. 그 후 CheckIn작업에서 **email**을 앱 관리자(개발자)의 이메일로 넣습니다. **checkpoint**에는 2를 넣고 "**테스트 작업**" 버튼을 클릭합니다. **응답** 탭에서 상태 값이 200이 나오면 테스트에 성공했다는 의미입니다. 만약 400이상의 값이 나오면 테스트에 실패한 것입니다.

    ![사용자 지정 커넥터 6][image-25]


## 파워 앱에 사용자 지정 커넥터 연결 ##

1. 파워 앱에서 **사용자 지정 커넥터**를 연결하겠습니다. 먼저 파워 앱으로 돌아와서 왼쪽의 네비게이션 바에서 원통모양의 **데이터**를 클릭 후 "**+데이터 추가**"를 누르면 하단에 사용자 지정 커넥터인 "**PL900CheckPoint**"가 나옵니다. 클릭하여 연결해줍니다.

    ![사용자 지정 커넥터 파워 앱에 연결 1][image-26]

2. 체크포인트 버튼인 "**Button3**"가 선택된 상태에서 "**OnSelect**" 속성에 "**Fx**"를 아래와 같이 입력합니다. 사용자 지정 커넥터가 체크포인트 값과 email값을 API에게 넘겨줍니다. 그러면 체크인 처리가 완료됩니다.

    ```
    CheckPointHelper.CheckIn({ checkpoint: 2, email: User().Email })
    ```

    ![사용자 지정 커넥터 파워 앱에 연결 2][image-27]

이제 파워 앱에서 굿즈를 신청하는 화면을 만들었습니다. 이 신청 데이터를 처리하는 업무 프로세스는 다음의 [파워 오토메이트][pau]에서 처리하도록 합니다.


## 다음 순서 ##

1. 배경 설명
2. M365 개발자 테넌트 및 추가 계정 생성
3. 웹 브라우저 프로필 구성
4. M365 개발자 계정 등록
5. Microsoft 리스트 만들기
6. 파워 앱 실습 #1
7. [파워 오토메이트 실습][handson pau] 👈
8. 파워 앱 실습 #2


[image-01]: ../../images/workshops/power-apps-1-01.png
[image-02]: ../../images/workshops/power-apps-1-02.png
[image-03]: ../../images/workshops/power-apps-1-03.png
[image-04]: ../../images/workshops/power-apps-1-04.png
[image-05]: ../../images/workshops/power-apps-1-05.png
[image-06]: ../../images/workshops/power-apps-1-06.png
[image-07]: ../../images/workshops/power-apps-1-07.png
[image-08]: ../../images/workshops/power-apps-1-08.png
[image-09]: ../../images/workshops/power-apps-1-09.png
[image-10]: ../../images/workshops/power-apps-1-10.png
[image-11]: ../../images/workshops/power-apps-1-11.png
[image-12]: ../../images/workshops/power-apps-1-12.png
[image-13]: ../../images/workshops/power-apps-1-13.png
[image-14]: ../../images/workshops/power-apps-1-14.png
[image-15]: ../../images/workshops/power-apps-1-15.png
[image-16]: ../../images/workshops/power-apps-1-16.png
[image-17]: ../../images/workshops/power-apps-1-17.png
[image-18]: ../../images/workshops/power-apps-1-18.png
[image-19]: ../../images/workshops/power-apps-1-19.png
[image-20]: ../../images/workshops/power-apps-1-20.png
[image-21]: ../../images/workshops/power-apps-1-21.png
[image-22]: ../../images/workshops/power-apps-1-22.png
[image-23]: ../../images/workshops/power-apps-1-23.png
[image-24]: ../../images/workshops/power-apps-1-24.png
[image-25]: ../../images/workshops/power-apps-1-25.png
[image-26]: ../../images/workshops/power-apps-1-26.png
[image-27]: ../../images/workshops/power-apps-1-27.png


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
