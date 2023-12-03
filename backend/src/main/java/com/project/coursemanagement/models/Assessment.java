package com.project.coursemanagement.models;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.FieldType;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.util.List;



@Document(collection="Assessments")
public class Assessment {
    @MongoId(targetType = FieldType.OBJECT_ID)
    private String id;
    private String title;
    private List<Pages> pages;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<Pages> getPages() {
        return pages;
    }

    public void setPages(List<Pages> pages) {
        this.pages = pages;
    }
}
