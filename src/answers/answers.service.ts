import { Injectable } from '@nestjs/common';
import { response } from 'express';

export type Answer = {
    id: number;
    id_user: string;
    date: number;
    score: string;
    number_question: string;
    category: string;
    difficulty: string;
};

@Injectable()
export class AnswerService {
    private readonly answers: Answer[] = [];

    async findAll(id_user: string){
        let answersTable = [];
        for (var i=0; i<this.answers.length;i++){
            console.log(this.answers[i])
            if(this.answers[i].id_user == id_user){
                answersTable.push((this.answers[i]));
            }
        }
        return answersTable;
    }

    async create(id_user: string, score: string, number_question: string, category: string, difficulty: string){

        let answer = {
            id: Date.now(),
            id_user: id_user,
            date: Date.now(),
            score: score,
            number_question: number_question,
            category: category,
            difficulty: difficulty
        }
        
        this.answers.push(answer)
        console.log(this.answers)
        return response.status(200) 
    }
}
