import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVER_URL } from 'src/environments/environment';
import { GlobalService } from './global.services';
import { Router } from '@angular/router';
import { AppVersion } from '@ionic-native/app-version/ngx';

@Injectable()
export class LoginService {

    tokenIsOk = false;
    update = true;

    constructor(
        private http: HttpClient,
        private global: GlobalService,
        private router: Router,
        private appVersion: AppVersion,
    ) { }

    check() {
        if (localStorage.getItem('token') && localStorage.getItem('role')) {
            return true;
        } else {
            return false;
        }
    }

    async login(credentials: { Login: string, Senha: string }) {
        try {
            let resposta: any;
            resposta = await this.http.post(`${SERVER_URL}/authenticate`, credentials).toPromise();

            localStorage.setItem('role', resposta.data.role);

            localStorage.setItem('token', resposta.token);

            return resposta.data.role;

        } catch (e) {
            this.global.toast('Usuário sem autorização!');
        }
    }

    async androidVersion() {

        const httpOptions = {
            headers: new HttpHeaders({ 'x-access-token': localStorage.getItem('token') })
          };

        try {
            let resposta: any;

            resposta = await this.http.get(`${SERVER_URL}loginlocar/androidVersion`, httpOptions).toPromise();
            console.log(resposta)
            return resposta.VersaoAndroid
        } catch (e) {
            alert(JSON.stringify(e))
        }
    }

    async checkUpdate() {
        try {
            const appVersion = await this.appVersion.getVersionNumber(); //RENAN APK
            const android_version = await this.androidVersion(); 
            
            console.log(appVersion)
            console.log("banco")

            console.log(android_version)
            console.log("do celular")

            if (android_version > appVersion) {
                this.update = false;
                this.router.navigate(['/update']);
            }
        } catch (e) {

        }
    }
}
