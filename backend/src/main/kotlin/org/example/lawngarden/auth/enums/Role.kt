package org.example.lawngarden.auth.enums;

enum class Role(private val displayName: String) {
    USER("잔디 관리인"),
    ADMIN("운영자");

    fun getDisplayName(): String = displayName
}
