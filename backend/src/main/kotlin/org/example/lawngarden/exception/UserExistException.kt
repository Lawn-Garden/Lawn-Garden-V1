package org.example.lawngarden.exception

class UserExistException(
    message : String = "존재하는 이름입니다."
) : RuntimeException(message)