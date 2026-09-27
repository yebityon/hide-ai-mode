# Hide Google AI Mode v2.1 — リリースノート（AMO 貼り付け用）

## 日本語 (ja)

v2.1 の変更点

- 非表示にする項目を選べるようになりました
  ツールバーのアイコンから設定画面を開き、「AI モード」タブと「AI による概要」をそれぞれ個別に表示・非表示に切り替えられます。変更はページを再読み込みしなくても即座に反映されます。初期設定では、v2.0 と同じく両方とも非表示です。

- 「AI による概要」を非表示にした後に空白の枠が残る問題を修正しました
  v2.0 では「AI による概要」の本文だけが非表示になり、その外枠（空白の領域と続きを表示するボタン）が残る場合がありました。v2.1 からは外枠を含むブロック全体を非表示にします。通常の検索結果は非表示にしません。

- 安全性について
  本拡張機能は外部モジュールを一切使用していません。ネットワーク通信を行わず、データの送信も行いません。v2.1 では設定を保存するために「storage」権限を追加しました。保存するのは上記 2 項目のオン・オフのみで、保存先はお使いのブラウザ内です。

ソースコード: https://github.com/yebityon/hide-ai-mode/releases/tag/v2.1.0

## English (en-US)

What's new in v2.1

- Choose what to hide
  Open the settings from the toolbar icon to show or hide the "AI Mode" tab and "AI Overview" independently. Changes take effect immediately, without reloading the page. By default both are hidden, the same as in v2.0.

- Fixed an empty frame left behind after hiding the AI Overview
  In v2.0, only the body of the AI Overview was hidden, and its outer frame (a blank area and the "Show more" button) could remain. Starting with v2.1, the entire block including the frame is hidden. Regular search results are never hidden.

- About safety
  This extension uses no external modules whatsoever. It makes no network requests and transmits no data. v2.1 adds the "storage" permission to save your settings. The only data stored is the on/off state of the two options above, and it stays in your browser.

Source code: https://github.com/yebityon/hide-ai-mode/releases/tag/v2.1.0

## 한국어 (ko)

v2.1 변경 사항

- 숨길 항목을 선택할 수 있습니다
  툴바 아이콘에서 설정 화면을 열어 'AI 모드' 탭과 'AI 개요'를 각각 표시하거나 숨길 수 있습니다. 변경 사항은 페이지를 새로 고치지 않아도 바로 적용됩니다. 기본 설정은 v2.0과 같이 둘 다 숨김입니다.

- 'AI 개요'를 숨긴 뒤 빈 영역이 남는 문제를 수정했습니다
  v2.0에서는 'AI 개요'의 본문만 숨겨지고, 바깥 틀(빈 영역과 내용을 더 보는 버튼)이 남는 경우가 있었습니다. v2.1부터는 바깥 틀을 포함한 블록 전체를 숨깁니다. 일반 검색 결과는 숨기지 않습니다.

- 안전성에 대하여
  이 확장 기능은 외부 모듈을 전혀 사용하지 않습니다. 네트워크 통신을 하지 않으며 데이터를 전송하지 않습니다. v2.1에서는 설정을 저장하기 위해 'storage' 권한을 추가했습니다. 저장하는 것은 위 두 항목의 켜기/끄기 상태뿐이며, 사용 중인 브라우저 안에 저장됩니다.

소스 코드: https://github.com/yebityon/hide-ai-mode/releases/tag/v2.1.0
