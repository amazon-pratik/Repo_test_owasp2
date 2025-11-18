# Set minimum CMake version
cmake_minimum_required(VERSION 3.10) 

# Set project name
project("cpp_codeql")

# Glob all cpp and hpp files recursively
file(GLOB_RECURSE PROJECT_SOURCES *.cpp *.hpp)

# Add executable using auto-detected sources
add_executable(myexec ${PROJECT_SOURCES})

# Specify C++ standard
set(CMAKE_CXX_STANDARD 11)

# Include directories
target_include_directories(myexec PUBLIC include) 

# Link libraries
target_link_libraries(myexec sqlite3)

# Enable debugging symbols
set(CMAKE_BUILD_TYPE Debug)

# Install executable
install(TARGETS myexec DESTINATION bin)