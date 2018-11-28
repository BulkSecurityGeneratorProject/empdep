package io.github.empdep.application.cucumber.stepdefs;

import io.github.empdep.application.EmpDepApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = EmpDepApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
