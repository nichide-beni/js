class Phone
{
  name;
  model;
  release;
  feature;

  // コンストラクタ
  constructor (name, model, release, feature) {
    this.name = name;
    this.model = model;
    this.release = release;
    this.feature = feature;
  }

  formatJpDate() {
    // split: 文字列を指定した文字で分割し、分割結果を配列として返す
    const year = this.release.split('-')[0];
    const month = this.release.split('-')[1];
    const date = this.release.split('-')[2];
    return `${year}年${month}月${date}日`;
  }
}

export { Phone };
