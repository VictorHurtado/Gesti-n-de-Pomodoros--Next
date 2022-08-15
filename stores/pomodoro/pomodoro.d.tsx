
export interface Pomodoro{
    completed: boolean;
    time: string;
    typeOf: number;
    startTime: string;
    finishTime: string;
    idUser?: string;


}
// completed = models.BooleanField() 
// time = models.TimeField()
// typeOf = models.IntegerField()
// startTime = models.TimeField()
// finishTime = models.TimeField()

// idUser = models.ForeignKey(Users, on_delete=models.CASCADE )
// idTask = models.ForeignKey(Task, on_delete=models.SET_NULL, blank=True, null=True)