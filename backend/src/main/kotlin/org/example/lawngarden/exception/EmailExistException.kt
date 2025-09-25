package org.example.lawngarden.exception

class EmailExistException(
    message: String = "이미 존재하는 이메일입니다."
) : RuntimeException(message)
