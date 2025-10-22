import { Phone } from './phone.js';
import { SmartPhone } from './smartphone.js';
// フィーチャーフォンクラスを読み込もう

function displayTable(id, targetClass) {
  let content = '';
  const el = document.getElementById(id);

  if (el) {
    content +=
      '<thead><tr>'
        + '<th>端末名</th>'
        + '<th>モデル</th>'
        + '<th>リリース日</th>'
        + '<th>機能</th>'
        // スマートフォンの場合に表示
        + (typeof targetClass[0].apps !== 'undefined' ? '<th>インストールアプリ</th>' : '')
        // フィーチャーフォンの場合はプラン

      + '</tr></thead><tbody>'
    ;

    targetClass.forEach(function (row) {
      content += '<tr>';

      content += `<td>${row.name}</td>`;
      content += `<td>${row.model}</td>`;
      content += `<td>${row.formatJpDate()}</td>`;
      content += `<td>${row.feature}</td>`;
      if (typeof row.apps !== 'undefined') {
        if (typeof row.apps === 'object') {
          content += `<td>${row.apps.join('<br>')}</td>`;
        } else {
          content += `<td>${row.apps}</td>`;
        }
      }
      content += '</tr>';
    });
    // フィーリャーフォンのプランを表示しよう

    content += '</tbody>';
    el.innerHTML = content;
  }
}

// ※発売日はサンプルであり現実のものとはリンクしていません

const phones = [
  new Phone('iPad', 'Pro', '2025-10-10', 'watchとの連動が可能'),
  new Phone('Amazon Fire', 'HD8', '2023-3-20', 'Kindleが使いやすい'),
];

const smartphones = [
  new SmartPhone('Google Pixcel', '9', '2025-4-10', 'AI機能が進化', ['googleカメラ', 'GooglePlay']),
  new SmartPhone('iPhone', '17', '2025-2-1', 'カメラ性能が大幅向上', 'AppleStore'),
];

const featurephones = [
  new FeaturePhone('端末1', 'ver1', '2025-1-1', 'プランが充実', ['3000円', 'Aプラン'])
  // 端末2として、5000円のBプランを用意してみよう
  // 端末3として、10000円のCプランを用意しよう。Cプランには、さらに「家族割あり」という項目を追加しよう(テーブル上でCプランの後に、料金とプランと同様に改行表示させる)
];

displayTable('phone-table', phones);
displayTable('smartphone-table', smartphones);
// フィーチャーフォンを表示してみよう
