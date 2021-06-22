import {ExcelComponent} from '@core/ExcelComponent'

export class Formula extends ExcelComponent {
  static className = 'excel__formula'

  toHTML() {
    return ' <div class="info">fx</div>\n' +
        '            <div class="input" contenteditable spellcheck="false"></div>'
  }
}
