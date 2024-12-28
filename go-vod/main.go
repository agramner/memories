package main

import (
	"fmt"
	"log"
	"os"

	"github.com/pulsejet/memories/go-vod/transcoder"
)

const VERSION = "0.2.5"

func main() {
	// Build initial configuration
	c := &transcoder.Config{
		VersionMonitor:  false,
		Version:         VERSION,
		Bind:            ":47788",
		ChunkSize:       3,
		LookBehind:      3,
		GoalBufferMin:   1,
		GoalBufferMax:   4,
		StreamIdleTime:  60,
		ManagerIdleTime: 60,
	}

	// Parse arguments
	args := os.Args[1:]
	for i := 0; i < len(args); i++ {
		if args[i] == "-version-monitor" {
			c.VersionMonitor = true
		} else if args[i] == "-version" {
			fmt.Print("go-vod " + VERSION)
			return
		} else if args[i] == "-vaapi-device" {
			i++
			c.VAAPIDevice = args[i]
		} else {
			c.FromFile(args[i]) // config file
		}
	}

	// Auto detect ffmpeg and ffprobe
	c.AutoDetect()

	// Start server
	code := transcoder.NewHandler(c).Start()

	// Exit
	log.Println("Exiting go-vod with status code", code)
	os.Exit(code)
}
