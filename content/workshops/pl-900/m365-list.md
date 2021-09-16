---
title: ➕ Microsoft 리스트 만들기
description: 파워 플랫폼 실습을 위해 필요한 Microsoft 리스트를 엑셀파일로부터 생성합니다.
order: 5104
---

마케팅 담당자인 안지민씨는 가장 먼저 엑셀 파일로 관리하던 굿즈 재고 데이터를 [Microsoft 리스트][m365 lists]로 옮기려고 합니다.


## 기초 데이터 다운로드 받기 ##

이 실습을 위해 우선 기초 데이터를 다운로드 받아야 합니다. 아래 링크를 클릭해서 파일을 다운로드 받으세요.

[기초 데이터 다운로드 받기][excel download]


## Microsoft 리스트 만들기 ##

엑셀파일에는 4개의 열과 10개의 행으로 이루어진 "**Table1**"이 있습니다. "**Table1**"은 굿즈 리스트와 관련한 "**ItemName**", "**ItemID**", "**ItemPrice**", "**Quantity**" 열이 있고 10개의 행 데이터가 있습니다. 다운로드 받은 엑셀파일 데이터를 Microsoft 리스트로 업로드 하여 굿즈 재고 관리에 필요한 데이터 저장소를 만듭니다.

1. [https://office.com](https://office.com) 사이트로 접속 후 왼쪽 상단의 메뉴바를 클릭 후 Microsoft 리스트를 클릭합니다. "**+새 목록**" 버튼을 클릭합니다.

    ![Microsoft 리스트 로그인][image-01]

2. "**Excel 에서**"을 클릭합니다. "**파일 업로드**"를 클릭하여 파일탐색기를 열고 다운로드 받은 기초 데이터를 선택합니다. "**열기**"를 누른 후 "**다음**"를 클릭합니다.

    ![기초 데이터 업로드][image-02]

3. 업로드 된 엑셀파일의 테이블을 선택합니다. 열마다 데이터 유형을 선택합니다. **ItemName**은 **한 줄 텍스트**로 설정, "**ItemID**"는 **제목**으로 설정, "**ItemPrice**"과 "**Quantity**"는 **숫자**로 설정한 후 "**다음**"을 클릭합니다.

    ![데이터 유형설정][image-03]

4. 이 리스트의 이름을 설정 후 저장사이트를 "**내 목록**"이 아닌 원하는 공용 사이트에 저장합니다. 여기서는 "**Communication site**"를 선택합니다. "**만들기**"버튼을 누릅니다.

    ![Microsoft 리스트 생성, 저장][image-04]

5. 생성된 리스트에서 "**+열추가**"를 클릭 후 "**예/아니오**" 데이터 유형을 선택합니다. 오른쪽 창에서 **이름**을 "**NeedApproval**"로 입력하고 **유형**은 "**예/아니오**"로 설정 확인, **기본값**은 "**아니요**"로 설정 후 저장합니다.

    ![리스트 열추가][image-05]

6. 6번 "**카드지갑**" 아이템과 7번 "**미니여행가방**" 아이템은 특정 금액이상의 굿즈 이므로 굿즈 신청시 부서장 승인이 필요한 항목입니다. 6번 행과 7번 행을 클릭하여 오른쪽의 창을 열고 "**NeedApproval**" 열에서 "**예**"로 선택하여 변경합니다. 리스트가 완성되었습니다.

    ![리스트 NeedApproval항목 설정][image-06]


## 다음 순서 ##

1. 배경 설명
2. M365 개발자 테넌트 및 추가 계정 생성
3. 웹 브라우저 프로필 구성
4. M365 개발자 계정 등록
5. Microsoft 리스트 만들기
6. [파워 앱 실습 #1][handson pas 1] 👈
7. 파워 오토메이트 실습
8. 파워 앱 실습 #2


[image-01]: ../../images/workshops/m365-list-01.png
[image-02]: ../../images/workshops/m365-list-02.png
[image-03]: ../../images/workshops/m365-list-03.png
[image-04]: ../../images/workshops/m365-list-04.png
[image-05]: ../../images/workshops/m365-list-05.png
[image-06]: ../../images/workshops/m365-list-06.png


[m365 lists]: https://www.microsoft.com/ko-kr/microsoft-365/microsoft-lists?WT.mc_id=power-34890-juyoo

[excel download]: https://github.com/xxxxx

[handson background]: ../background
[handson m365 create]: ../m365-account-setup
[handson browser profile]: ../web-browser-setup
[handson m365 rego]: ../m365-account-registration
[handson m365 list]: ../m365-list
[handson pas 1]: ../power-apps-1
[handson pau]: ../power-automate
[handson pas 2]: ../power-apps-2
