import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Hero }           from './hero';
import { Observable }     from 'rxjs/Observable';
import { Headers, RequestOptions} from '@angular/http'

@Injectable()
export class HeroService{
  private heroesUrl = 'app/heroes';

  constructor(private http:Http){}

  getHeroes():Observable<Hero[]>{
   // get(url: string, options?: RequestOptionsArgs): Observable<Response>;
    return this.http.get(this.heroesUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  addHero (name: string): Observable<Hero> {
      let headers = new Headers({'Context-type':'application/json'});
      let options = new RequestOptions({headers:headers});

      //post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>;
      return this.http.post(this.heroesUrl,{name},options)
        .map(this.extractData)
        .catch(this.handleError);

  }


  private extractData(res: Response){
    let body = res.json();
    console.log('hi1');
    //type of body.data is Observable<Hero[]>
    return body.data || { };
  }

 private handleError(error: Response  | any){
   console.log('hi2');
     let errMsg: string;
     if (error instanceof Response) {
       const body = error.json() || '';
       const err = body.error || JSON.stringify(body);
       errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
     } else {
       errMsg = error.message ? error.message : error.toString();
     }
     console.error(errMsg);
     return Observable.throw(errMsg);
  }

}
