import CodeMirrorEditor from '../../../code_manager/model/CodeMirrorEditor';
import EditorModel from '../../../editor/model/Editor';
import Trait from '../model/Trait';
import TraitInputView, { TraitInputViewOpts } from './TraitInputView';
import { EditorState } from '@codemirror/state';

export default class TraitTextView extends TraitInputView<Trait<string>> {
  protected type: string = 'function';

  get clsLabel() {
    const { ppfx } = this;
    return `${ppfx}field`;
  }

  constructor(em: EditorModel, opts?: TraitInputViewOpts<'function'>) {
    super(em, opts);
  }

  getInputElem() {
    const { input, $input } = this;
    return input || ($input && $input.get && $input.get(0)) || this.getElInput();
  }

  get inputValue(): string {
    const el = this.getInputElem();
    return el?.value ?? this.target.value;
  }

  set inputValue(value: string) {
    const el = this.getInputElem();
    el && (el.value = value as any);
  }

  //   protected getInputEl() {
  //     // if (!this.$input) {
  //       const { em, name, type } = this;
  //       const value = this.target.value;
  //       const el = $(`<div class="${type}">`)!
  //       const editor = new CodeMirrorEditor({el})
  //       const input: JQuery<HTMLInputElement> = $(`<input type="${type}">`);
  //       const i18nAttr = em.t(`traitManager.traits.attributes.${name}`) || {};
  //       input.attr({
  //         placeholder: this.paceholder || value,
  //         ...i18nAttr,
  //       });

  //     //   if (!isUndefined(value)) {
  //     //     input.prop('value', value as any);
  //     //   }

  //     // }
  //     return el.get(0);
  //   }

  templateInput() {
    return '';
  }
  renderField() {
    const { $el, appendInput, elInput } = this;
    const inputs = $el.find('[data-input]');
    const el = inputs[inputs.length - 1];
    const txtarea = document.createElement('textarea');
    txtarea.value = 'function(){ \n //TODO: implementing it \n}';
    el.appendChild(txtarea);
    const editor = new CodeMirrorEditor({
      el: txtarea,
      readOnly: false,
      lineNumbers: false,
      codeName: 'js',
      readOnlyRanges: (state: EditorState) => [
        { to: state.doc.line(1).to },
        { from: state.doc.line(state.doc.lines).from },
      ],
    });

    // const cont = document.createElement('div');

    // editor.set({
    // //   ...this.config.optsCodeViewer,
    //   readOnly: false,
    //   lineNumbers: false,
    //   readOnlyRanges: (state: EditorState) =>
    //   [{to: state.doc.line(1).to}, {from: state.doc.line(state.doc.lines).from}]
    // });
    editor.init(txtarea);
    // editor.setContent(`function(){ \n //TODO: implementing it \n}`)
    // editor.setElement(el);
    // if (!elInput) {
    //   this.elInput = this.getInputEl();
    //   appendInput ? el.appendChild(this.elInput!) : el.insertBefore(this.elInput!, el.firstChild);
    // }
  }
}