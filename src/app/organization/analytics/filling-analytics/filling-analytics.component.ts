import { Component, OnInit } from "@angular/core";

@Component({
  selector: "nopaper-filling-analytics",
  templateUrl: "./filling-analytics.component.html",
  styleUrls: ["./filling-analytics.component.css"]
})
export class FillingAnalyticsComponent implements OnInit {
  public barChartOptions: any = {
    legend: {
      display: false
    },
    title: {},
    scales: {
      xAxes: [{}],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            max: 100,
            stepSize: 20
          },
          scaleLabel: {
            display: true,
            fontSize: 16,
            labelString: "Нагрузка, %"
          }
        }
      ]
    }
  };
  public barChartLabels: string[] = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
  public barChartType = "line";
  public barChartLegend = false;
  public barChartData: any[] = [
    {
      pointRadius: 6,
      lineTension: 0,
      fill: false,
      borderWidth: 4,
      label: "Нагрузка",
      data: [40, 60, 80, 60, 80, 60, 80]
    }
  ];
  public barColors: any[] = [
    {
      borderColor: "#21BE4A",
      pointBackgroundColor: "#21BE4A"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
