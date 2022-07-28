'use babel';

import 20DaftarBoSlotGacorMudahMaxwinTerbaru from '../lib/20-daftar-bo-slot-gacor-mudah-maxwin-terbaru';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('20DaftarBoSlotGacorMudahMaxwinTerbaru', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('20-daftar-bo-slot-gacor-mudah-maxwin-terbaru');
  });

  describe('when the 20-daftar-bo-slot-gacor-mudah-maxwin-terbaru:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.20-daftar-bo-slot-gacor-mudah-maxwin-terbaru')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, '20-daftar-bo-slot-gacor-mudah-maxwin-terbaru:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.20-daftar-bo-slot-gacor-mudah-maxwin-terbaru')).toExist();

        let 20DaftarBoSlotGacorMudahMaxwinTerbaruElement = workspaceElement.querySelector('.20-daftar-bo-slot-gacor-mudah-maxwin-terbaru');
        expect(20DaftarBoSlotGacorMudahMaxwinTerbaruElement).toExist();

        let 20DaftarBoSlotGacorMudahMaxwinTerbaruPanel = atom.workspace.panelForItem(20DaftarBoSlotGacorMudahMaxwinTerbaruElement);
        expect(20DaftarBoSlotGacorMudahMaxwinTerbaruPanel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, '20-daftar-bo-slot-gacor-mudah-maxwin-terbaru:toggle');
        expect(20DaftarBoSlotGacorMudahMaxwinTerbaruPanel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.20-daftar-bo-slot-gacor-mudah-maxwin-terbaru')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, '20-daftar-bo-slot-gacor-mudah-maxwin-terbaru:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let 20DaftarBoSlotGacorMudahMaxwinTerbaruElement = workspaceElement.querySelector('.20-daftar-bo-slot-gacor-mudah-maxwin-terbaru');
        expect(20DaftarBoSlotGacorMudahMaxwinTerbaruElement).toBeVisible();
        atom.commands.dispatch(workspaceElement, '20-daftar-bo-slot-gacor-mudah-maxwin-terbaru:toggle');
        expect(20DaftarBoSlotGacorMudahMaxwinTerbaruElement).not.toBeVisible();
      });
    });
  });
});
