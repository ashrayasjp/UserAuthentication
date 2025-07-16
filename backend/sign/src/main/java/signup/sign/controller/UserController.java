package signup.sign.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import signup.sign.model.User;
import signup.sign.repository.UserRepository;
import org.springframework.web.bind.annotation.GetMapping;
import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/signup")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        if (userRepository.existsByUsername(user.getUsername())) {
            return ResponseEntity.badRequest().body("Username already exists");

        }

        userRepository.save(user);
        return ResponseEntity.ok("User Registered Successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody User user, HttpSession session) {

        User dbUser = userRepository.findByUsername(user.getUsername());
        if (dbUser == null) {
            return ResponseEntity.status(401).body("User not Registered");
        } else if (!dbUser.getPassword().equals(user.getPassword())) {
            return ResponseEntity.status(401).body("Incorrect Password");
        } else {

            session.setAttribute("username", dbUser.getUsername());
            return ResponseEntity.ok("Login successful");
        }
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logoutUser(HttpSession session) {
        session.invalidate();
        return ResponseEntity.ok("Logout Successful");
    }

}
