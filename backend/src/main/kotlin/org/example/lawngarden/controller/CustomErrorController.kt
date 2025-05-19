package org.example.lawngarden.controller

import jakarta.servlet.http.HttpServletRequest
import org.springframework.boot.web.error.ErrorAttributeOptions
import org.springframework.boot.web.servlet.error.ErrorAttributes
import org.springframework.boot.web.servlet.error.ErrorController
import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.context.request.WebRequest

@Controller
class CustomErrorController(
        private val errorAttributes: ErrorAttributes
) : ErrorController {

    @GetMapping("/error")
    fun handleError(request: HttpServletRequest, webRequest: WebRequest, model: Model): String {
        val errors = errorAttributes.getErrorAttributes(webRequest, ErrorAttributeOptions.defaults())

        model.addAttribute("timestamp", errors["timestamp"])
        model.addAttribute("status", errors["status"])
        model.addAttribute("error", errors["error"])
        model.addAttribute("message", errors["message"])
        model.addAttribute("path", errors["path"])

        return "error"
    }
}
