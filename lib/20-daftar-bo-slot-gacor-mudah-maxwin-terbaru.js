'use babel';

import 20DaftarBoSlotGacorMudahMaxwinTerbaruView from './20-daftar-bo-slot-gacor-mudah-maxwin-terbaru-view';
import { CompositeDisposable } from 'atom';

export default {

  20DaftarBoSlotGacorMudahMaxwinTerbaruView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.20DaftarBoSlotGacorMudahMaxwinTerbaruView = new 20DaftarBoSlotGacorMudahMaxwinTerbaruView(state.20DaftarBoSlotGacorMudahMaxwinTerbaruViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.20DaftarBoSlotGacorMudahMaxwinTerbaruView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      '20-daftar-bo-slot-gacor-mudah-maxwin-terbaru:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.20DaftarBoSlotGacorMudahMaxwinTerbaruView.destroy();
  },

  serialize() {
    return {
      20DaftarBoSlotGacorMudahMaxwinTerbaruViewState: this.20DaftarBoSlotGacorMudahMaxwinTerbaruView.serialize()
    };
  },

  toggle() {
    console.log('20DaftarBoSlotGacorMudahMaxwinTerbaru was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
