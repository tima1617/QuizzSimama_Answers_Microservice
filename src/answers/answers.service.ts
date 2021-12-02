import { Injectable } from '@nestjs/common';

export type Answer = {
    id: number;
    id_user: number;
    date: Date;
    score: number;
    number_question: number;
    category: number;
    difficulty: string;
};

@Injectable()
export class AnswerService {
    private readonly answers: Answer[] = [
        {
            id: 1,
            id_user: 1,
            date: new Date('2021-10-10T03:24:00'),
            score: 5,
            number_question: 10,
            category: 22,
            difficulty: 'easy'
        },
        {
            id: 2,
            id_user: 1,
            date: new Date('2021-11-10T03:24:00'),
            score: 24,
            number_question: 25,
            category: 21,
            difficulty: 'medium'
        },
        {
            id: 3,
            id_user: 2,
            date: new Date('2021-11-12T03:24:00'),
            score: 5,
            number_question: 10,
            category: 22,
            difficulty: 'easy'
        },
    ];

    async findAll(id_user: number){
        let answersTable = [];
        for (var i=0; i<this.answers.length;i++){
            if(this.answers[i].id_user == id_user){
                answersTable.push((this.answers[i]));
            }
        }
        return answersTable;
    }
}
