package com.project.coursemanagement.models;

import java.util.List;

public class Elements {
    private String type;
    private String name;
    private String title;
    private String  choicesOrder;
    private List<String> choices;
    private String correctAnswer;

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getChoicesOrder() {
        return choicesOrder;
    }

    public void setChoicesOrder(String choicesOrder) {
        this.choicesOrder = choicesOrder;
    }

    public List<String> getChoices() {
        return choices;
    }

    public void setChoices(List<String> choices) {
        this.choices = choices;
    }

    public String getCorrectAnswer() {
        return correctAnswer;
    }

    public void setCorrectAnswer(String correctAnswer) {
        this.correctAnswer = correctAnswer;
    }

    public String getScore() {
        return score;
    }

    public void setScore(String score) {
        this.score = score;
    }

    private String score;
}
