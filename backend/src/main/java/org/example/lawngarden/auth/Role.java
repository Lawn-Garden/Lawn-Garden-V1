package org.example.lawngarden.auth;

public enum Role {
    USER("잔디 관리인"),
    ADMIN("운영자");

    private final String displayName;

    Role(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }
}
