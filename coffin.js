class CoffinVm extends HTMLElement {
	static observedAttributes = ["src", "width", "height", "left", "right", "style"];

  constructor() {
    super();
    const _iframe = document.createElement("iframe");
    //_iframe.src = "https://wikipedia.org";
    if (self.innerHTML != "") {_iframe.srcdoc = `<p>${this.innerHTML}</p>`;}
    document.body.appendChild(_iframe);
    this._iframe = _iframe;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
			case "src": null;
			case "width": this._iframe.width = newValue;
			case "height": this._iframe.height = newValue;
			case "left": this._iframe.left = newValue;
			case "right": this._iframe.right = newValue;
			case "style": this._iframe.style = newValue;
	  }
  }
}

customElements.define('coffin-vm', CoffinVm);