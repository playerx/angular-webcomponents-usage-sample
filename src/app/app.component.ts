import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  loadingInfo = '';

  async loadWebComponentsModule() {
    const rootUrl = 'https://angular-elements-sample.now.sh';

    await this.loadScript(`${rootUrl}/inline.bundle.js`);
    await this.loadScript(`${rootUrl}/vendor.bundle.js`);
    await this.loadScript(`${rootUrl}/main.bundle.js`);
  }

  private async loadScript(url) {
    this.loadingInfo = `Loading: ${url}`;

    return new Promise(resolve => {
      const script = document.createElement('script');
      script.setAttribute('src', url);
      script.onload = () => resolve();
      document.body.appendChild(script);
    });
  }
}
