---
title: ➕ 파워 앱 실습 2
description: 파워 앱을 실습합니다.
order: 5107
---

앞서 만든 [파워 오토메이트][pau] 워크플로우를 [파워 앱][pas]에 연결하는 작업을 진행합니다.


## 파워 앱 굿즈 신청 화면 수정 ##

1. **체크포인트**버튼이름을 **주문**으로 변경합니다. 먼저 **굿즈신청플로우**에 전송할 컬렉션을 만들겠습니다. `ClearCollect()`함수를 사용하여 컬렉션 생성과 동시에 리프레쉬하는 기능을 이용합니다. 여기서 `ItemCollection`이라는 이름의 컬렉션을 생성하고 컬럼을 `itemId`와 `qauntity`로 지정 후 그에 상응하는 값들을 넣습니다. `itemId`에는 드롭다운에서 선택한 아이템 ID값들이 들어가고 `quantity`에는 수량이 들어갑니다. `RemoveIf()`함수를 사용하여 `ItemCollection`에서 아이템 수량이 0이거나 비어 있으면 해당하는 레코드를 삭제합니다. 아래의 소스코드를 참조하여 "**Button3**"의 "**OnSelect**"속성에서 "**Fx**"를 아래와 같이 입력합니다. 입력 후에는 키보드의 `Alt` 키 또는 `Option` 키를 누른 상태에서 "**주문**"버튼을 클릭합니다.

    ```
    /* ItemCollection 이라는 이름으로 컬렉션을 생성 */
    /* 파워 오토메이트 플로우에 보낼 데이터를 이 컬렉션에 저장 */
    ClearCollect(ItemCollection, {
          itemId: LookUp(List, ItemName = Dropdown1.Selected.ItemName, ID),
          quantity: Int(TextInput1.Text)
        },
        {
          itemId: LookUp(List, ItemName = Dropdown2.Selected.ItemName, ID),
          quantity: Int(TextInput2.Text)
        },
        {
          itemId: LookUp(List, ItemName = Dropdown3.Selected.ItemName, ID),
          quantity: Int(TextInput3.Text)
        }
    );
    RemoveIf(ItemCollection, quantity=0 Or IsBlankOrError(quantity));
    ```

    ![주문버튼 업데이트1][image-01]

2. 보기 탭의 "**컬렉션**"으로 들어가면 아래와 같은 화면이 나옵니다. 주문 입력 화면에서 입력했던 데이터가 `ItemCollection`이라는 이름의 컬렉션에 잘 저장되었습니다.

    ![주문버튼 업데이트2][image-02]

3. **PL900GoodsApp**에 파워 오토메이트에서 생성한 **PL900GoodsFlow**를 연결하겠습니다. "**Button3**"가 선택된 상태에서 작업 탭의 "**Power Automate**"을 클릭하면 데이터 창이 나옵니다. 여기서 "**PL900GoodsFlow**"를 선택하여 연결합니다.

    ![굿즈 신청 플로우 연결1][image-03]

4. `PL900GoodsFlow.Run()` 함수가 생성됩니다. **PL900GoodsFlow**를 실행한 후 플로우에서 받은 메세지를 `Result`라는 컬렉션에 저장하기 위해 아래의 소스코드와 같이 추가 업데이트 합니다.

    ```
    /* ItemCollection 이라는 이름으로 컬렉션을 생성 */
    /* 파워 오토메이트 플로우에 보낼 데이터를 이 컬렉션에 저장 */
    ClearCollect(ItemCollection, {
          itemId: LookUp(List, ItemName = Dropdown1.Selected.ItemName, ID),
          quantity: Int(TextInput1.Text)
        },
        {
          itemId: LookUp(List, ItemName = Dropdown2.Selected.ItemName, ID),
          quantity: Int(TextInput2.Text)
        },
        {
          itemId: LookUp(List, ItemName = Dropdown3.Selected.ItemName, ID),
          quantity: Int(TextInput3.Text)
        }
    );
    RemoveIf(ItemCollection, quantity=0 Or IsBlankOrError(quantity));

    /* PL900GoodsFlow 실행 한 후 플로우에서 받은 메세지를 Result라는 컬렉션에 저장 */
    ClearCollect(Result, PL900GoodsFlow.Run(
        JSON({
            email: User().Email,
            items: ItemCollection
        })
    ));
    ```

    ![굿즈 신청 플로우 연결2][image-04]

5. `Alt`키 혹은 `Option`키를 누른 상태에서 "**주문**"버튼을 다시 한번 클릭합니다. 보기 탭에 "**컬렉션**"을 클릭하면 Result라는 컬렉션 안에 **PL900GoodsFlow**를 실행한 후 플로우에서 받은 메시지가 저장 되어있습니다.

    ![굿즈 신청 플로우 연결3][image-05]


## 화면 전환 설정 및 체크포인트 설정 ##

`Navigate()`함수를 사용하여 "**주문**" 버튼을 눌렀을 때 "**메시지 처리중**"이라는 화면으로 화면 전환 설정하겠습니다.

1. "**새 화면**"에서 "**성공**"화면을 클릭하여 "**Screen2**"를 생성합니다.

    ![화면전환1][image-06]

2. "**메시지 입력창**"이 선택된 상태에서 "**Text**"속성을 아래와 같이 변경합니다.

    ```
    First(Result).message
    ```

    ![화면전환2][image-07]

3. "**Button3**"의 **OnSelect**속성을 클릭합니다. 화면 전환을 위하여 `Navigate()`함수를 사용합니다. 체크포인트에 체크인하기 위해 소스코드를 아래와 같이 추가 업데이트 합니다.

    ```
    /* 체크포인트 2 */
    CheckPointHelper.CheckIn({ checkpoint: 2, email: User().Email })

    /* ItemCollection 이라는 이름으로 컬렉션을 생성 */
    /* 파워 오토메이트 플로우에 보낼 데이터를 이 컬렉션에 저장 */
    ClearCollect(ItemCollection, {
          itemId: LookUp(List, ItemName = Dropdown1.Selected.ItemName, ID),
          quantity: Int(TextInput1.Text)
        },
        {
          itemId: LookUp(List, ItemName = Dropdown2.Selected.ItemName, ID),
          quantity: Int(TextInput2.Text)
        },
        {
          itemId: LookUp(List, ItemName = Dropdown3.Selected.ItemName, ID),
          quantity: Int(TextInput3.Text)
        }
    );
    RemoveIf(ItemCollection, quantity=0 Or IsBlankOrError(quantity));

    /* PL900GoodsFlow 실행 한 후 플로우에서 받은 메세지를 Result라는 컬렉션에 저장 */
    ClearCollect(Result, PL900GoodsFlow.Run(
        JSON({
            email: User().Email,
            items: ItemCollection
        })
    ));

    /* 체크포인트 4 */
    CheckPointHelper.CheckIn({ checkpoint: 4, email: User().Email })

    /* 화면 전환 */
    Navigate(Screen2)
    ```

    ![화면전환3][image-08]

## 파워 앱 저장과 공유 ##

1. **파일** 탭을 누르면 **저장**화면으로 전환됩니다. "**저장**"을 누른 후 **"게시**"를 누릅니다. "**게시**"버튼을 클릭하면 저장된 버전으로 게시가 됩니다.

    ![파일 앱 저장과 공유1][image-09]

2. 게시를 하고 "**공유**"버튼을 클릭하면 화면이 아래와 같이 나옵니다. 여기서 사용자를 입력하여 공유할 수 있습니다. 앞서 만들어 둔 보안 그룹 이름, "**PL900SecurityGroup**"을 입력하고 "**공유**"를 클릭합니다. 이로써 이 보안 그룹에 속한 멤버들은 **PL900GoodsApp**을 사용할 수 있는 권한이 생겼습니다. 공동 소유자는 개별 계정만 설정되며 계정을 입력 후 공동 소유자로 지정할 수 있습니다.

    ![파일 앱 저장과 공유2][image-10]

## 사용자의 파워 앱 사용 ##

이제 가맹점 점장 페르소나를 가진 김온유씨도 이 파워 앱을 사용할 수 있게 됐습니다. 사용자인 김온유씨의 계정에서 로그인하여 **PL900GoodsApp**을 사용해 보겠습니다.

1. [파워 앱 포털][pas]로 접속 후 앱 메뉴에서 **PL900GoodsApp**을 실행합니다. 화면에 **권한 허용**에 대한 요청이 나타납니다. "**허용**"을 클릭 후 입장합니다.

    ![사용자 화면1][image-11]

2. 모든 화면이 잘 실행되는지 확인합니다. 파워 앱 화면을 모두 실행된 후 승인 안내 이메일도 확인합니다.

    ![사용자 화면2][image-12]

    ![사용자 화면3][images-13]


## 다음 순서 ##

축하합니다! 파워 플랫폼 기초 과정 실습을 모두 끝마치셨습니다. 혹시 다시 한 번 더 파워 플랫폼 기초 과정에 대한 스터디 자료를 보고 싶다면 아래 링크를 클릭하세요.

* 학습자료 👉 [바로가기][fdk pl900 materials]
* 동영상 👉 [바로가기][fdk pl900 playlist]
* 질문/답변 👉 [바로가기][fdk discussion]


[image-01]: ../../images/workshops/power-apps-2-01.png
[image-02]: ../../images/workshops/power-apps-2-02.png
[image-03]: ../../images/workshops/power-apps-2-03.png
[image-04]: ../../images/workshops/power-apps-2-04.png
[image-05]: ../../images/workshops/power-apps-2-05.png
[image-06]: ../../images/workshops/power-apps-2-06.png
[image-07]: ../../images/workshops/power-apps-2-07.png
[image-08]: ../../images/workshops/power-apps-2-08.png
[image-09]: ../../images/workshops/power-apps-2-09.png
[image-10]: ../../images/workshops/power-apps-2-10.png
[image-11]: ../../images/workshops/power-apps-2-11.png
[image-12]: ../../images/workshops/power-apps-2-12.png
[image-13]: ../../images/workshops/power-apps-2-13.png


[pas]: https://powerapps.microsoft.com/ko-kr/?WT.mc_id=power-34890-juyoo
[pau]: https://flow.microsoft.com/ko-kr/?WT.mc_id=power-34890-juyoo

[fdk discussion]: https://github.com/fusiondevkr/blog/discussions

[fdk pl900 materials]: https://aka.ms/fdk/pl900/materials
[fdk pl900 playlist]: https://www.youtube.com/playlist?list=PL5_dhZuHiVhJNUJA00WVwrVfKPgi35CqI
