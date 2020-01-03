import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-api",
  templateUrl: "./api.component.html",
  styleUrls: ["./api.component.css"]
})
export class ApiComponent implements OnInit {
  private playerUrl =
    //"https://cricapi.com/api/playerFinder?apikey=tnBHcSn1PlM9tvBTySXn0g9cej83&name="
    "https://cricapi.com/api/playerStats?apikey=tnBHcSn1PlM9tvBTySXn0g9cej83&pid=";
  constructor(private http: HttpClient) {}
  playerInfo = [];
  searchPlayer(pid) {
    this.http.get<any>(`${this.playerUrl}${pid}`).subscribe(user => {
      this.playerInfo = user;
    });

    // constructor(private http: HttpClient) {
    //   this.http
    //     .get(
    //       "https://cricapi.com/api/playerStats?apikey=tnBHcSn1PlM9tvBTySXn0g9cej83&pid=35320"
    //     )
    //     .subscribe(user => {
    //       console.log(user);
    //     }); //angular httpClient
    // }
  }

  ngOnInit() {}
}
