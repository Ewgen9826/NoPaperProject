import { Component, OnInit } from "@angular/core";

@Component({
  selector: "nopaper-attendance-analytics",
  templateUrl: "./attendance-analytics.component.html",
  styleUrls: ["./attendance-analytics.component.css"]
})
export class AttendanceAnalyticsComponent implements OnInit {
  public barChartOptions: any = {
    legend: {
      display: false
    },
    title: {
      display: true,
      position: "left",
      fontSize: 18,
      text: "Количество человек"
    },
    scales: {
      xAxes: [
        {
          barPercentage: 1,
          categoryPercentage: 1
        }
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };
  public barChartLabels: string[] = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
  public barChartType = "bar";
  public barChartLegend = false;
  public barChartData: any[] = [{ data: [5, 4, 7, 6, 8, 8, 7] }];
  public barColors: any[] = [
    {
      backgroundColor: [
        "#21be4a",
        "#BEBEBE",
        "#21be4a",
        "#BEBEBE",
        "#21be4a",
        "#BEBEBE",
        "#21be4a"
      ],
      borderColor: ["#f04723"],
      hoverBackgroundColor: [
        "#259E44",
        "#939393",
        "#259E44",
        "#939393",
        "#259E44",
        "#939393",
        "#259E44"
      ],
      hoverBorderColor: ["#f04723"]
    }
  ];
  constructor() {}

  ngOnInit() {}
}
